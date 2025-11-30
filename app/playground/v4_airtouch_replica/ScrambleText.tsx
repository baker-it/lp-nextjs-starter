'use client'

import React, { useEffect, useState, useRef } from 'react'

interface ScrambleTextProps {
    text: string
    className?: string
    duration?: number
    delay?: number
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

export default function ScrambleText({ text, className = "", duration = 1500, delay = 0 }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isScrambling, setIsScrambling] = useState(true)
    const requestRef = useRef<number>()
    const startTimeRef = useRef<number>()

    // Accessibility: We want screen readers to read the full text, not the scrambled version.
    // We'll hide the scrambled text from ARIA and provide a visually hidden label.

    useEffect(() => {
        let timeoutId: NodeJS.Timeout

        const animate = (time: number) => {
            if (!startTimeRef.current) startTimeRef.current = time
            const progress = time - startTimeRef.current

            if (progress < duration) {
                // Calculate how many characters should be revealed based on progress
                const revealRatio = Math.min(1, progress / duration)
                const revealCount = Math.floor(revealRatio * text.length)

                const scrambled = text
                    .split("")
                    .map((char, index) => {
                        if (char === " " || char === "\n") return char
                        if (index < revealCount) return char
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    })
                    .join("")

                setDisplayText(scrambled)
                requestRef.current = requestAnimationFrame(animate)
            } else {
                setDisplayText(text)
                setIsScrambling(false)
            }
        }

        // Start animation after delay
        timeoutId = setTimeout(() => {
            requestRef.current = requestAnimationFrame(animate)
        }, delay)

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
            clearTimeout(timeoutId)
        }
    }, [text, duration, delay])

    return (
        <span className="relative inline-block" aria-label={text}>
            {/* 1. Ghost Element - Reserves width/height */}
            <span className={`opacity-0 pointer-events-none select-none ${className}`}>
                {text}
            </span>

            {/* 2. Animated Element - Overlaid perfectly */}
            <span className={`absolute top-0 left-0 w-full h-full ${className}`} aria-hidden="true">
                {displayText}
            </span>
        </span>
    )
}
