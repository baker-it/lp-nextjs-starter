'use client'
import Image from 'next/image'
import type { Image as SanityImage } from 'sanity'
import { urlFor } from '@/lib/sanity.image'

export default function SanityImage(props: { image?: SanityImage; alt?: string; className?: string; sizes?: string }) {
  const { image, alt = '', className, sizes } = props
  if (!image) return null
  const src = urlFor(image).width(1600).height(900).fit('crop').url()
  return <Image src={src} alt={alt} width={1600} height={900} className={className} sizes={sizes} />
}
