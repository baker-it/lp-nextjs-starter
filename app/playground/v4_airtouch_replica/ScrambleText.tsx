'use client'

import React, { useEffect, useState, useRef } from 'react'

interface ScrambleTextProps {
    text: string
    className?: string
    textClassName?: string
    duration?: number
    delay?: number
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-/\\"

const getDeterministicScramble = (text: string) => {
    return text.split('').map((char, i) => {
        if (char === ' ' || char === '\n') return char;
        return CHARS[(char.charCodeAt(0) + i) % CHARS.length];
    }).join("");
};

export default function ScrambleText({
    text,
    className = "",
    textClassName = "",
    duration = 1500,
    delay = 0
}: ScrambleTextProps) {
    const [noiseText, setNoiseText] = useState(() => getDeterministicScramble(text))
    const [revealProgress, setRevealProgress] = useState(0) // 0 to 1
    const [isScrambling, setIsScrambling] = useState(true)
    const [hasStarted, setHasStarted] = useState(false)
    const requestRef = useRef<number>()
    const startTimeRef = useRef<number>()
    const lastUpdateRef = useRef<number>(0)
    const FPS_THROTTLE = 50 // Update noise text every ~50ms instead of every 16ms

    useEffect(() => {
        let timeoutId: NodeJS.Timeout

        const animate = (time: number) => {
            if (!startTimeRef.current) startTimeRef.current = time
            const progress = time - startTimeRef.current

            if (progress < duration) {
                const revealRatio = Math.min(1, progress / duration)
                setRevealProgress(revealRatio)

                // Only update the noise text every FPS_THROTTLE milliseconds
                // This significantly reduces React re-renders and CPU load on mobile.
                if (time - lastUpdateRef.current > FPS_THROTTLE) {
                    const scrambled = text
                        .split("")
                        .map((char) => {
                            if (char === " " || char === "\n") return char
                            return CHARS[Math.floor(Math.random() * CHARS.length)]
                        })
                        .join("")

                    setNoiseText(scrambled)
                    lastUpdateRef.current = time
                }

                requestRef.current = requestAnimationFrame(animate)
            } else {
                setRevealProgress(1)
                setIsScrambling(false)
            }
        }

        timeoutId = setTimeout(() => {
            setHasStarted(true)
            requestRef.current = requestAnimationFrame(animate)
        }, delay)

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
            clearTimeout(timeoutId)
        }
    }, [text, duration, delay])

    const revealedIndex = Math.floor(revealProgress * text.length)
    const characters = text.split("")

    return (
        <span className={`relative inline-block ${className}`} aria-label={text}>
            {/* 1. REAL TEXT LAYER:
                 This is completely static in the DOM, forcing Safari/WebKit to fully calculate
                 the background-clip gradient perfectly on the very first frame.
                 We only animate the CSS `opacity` of individual characters.
            */}
            <span className={`inline-block whitespace-pre-wrap ${textClassName}`} aria-hidden="true">
                {characters.map((char, index) => (
                    <span
                        key={`real-${index}`}
                        style={{
                            opacity: index < revealedIndex ? 1 : 0
                        }}
                    >
                        {char}
                    </span>
                ))}
            </span>

            {/* 2. NOISE TEXT LAYER & CURSOR:
                 Mirrors the exact character-by-character layout of the real text to prevent
                 line wraps or widths from jumping wildly during the scramble.
            */}
            {(isScrambling || revealedIndex >= characters.length) && hasStarted && (
                <span className="absolute inset-0 pointer-events-none whitespace-pre-wrap" aria-hidden="true">
                    {characters.map((char, index) => {
                        // FIX: Preserve spaces exactly as they are so the word wrapping matches Layer 1 perfectly!
                        if (char === " " || char === "\n") {
                            return <span key={`space-${index}`}>{char}</span>
                        }

                        const isCursor = index === revealedIndex;
                        const isNoise = index > revealedIndex;

                        return (
                            <span key={`noise-anchor-${index}`} className="relative inline-block">
                                {/* Anchor lock to guarantee exact kerning/spacing */}
                                <span className="opacity-0">{char}</span>

                                {/* TERMINAL BLOCK CURSOR */}
                                {isCursor && (
                                    <span className="absolute inset-x-0 bottom-[5%] top-[5%] bg-white opacity-90 animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>
                                )}

                                {/* The noise character sits perfectly inside the anchor */}
                                {isNoise && isScrambling && (
                                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-white drop-shadow-md">
                                        {noiseText[index] || char}
                                    </span>
                                )}
                            </span>
                        )
                    })}

                    {/* Final Blinking Cursor removed as per user request */}
                </span>
            )}
        </span>
    )
}
