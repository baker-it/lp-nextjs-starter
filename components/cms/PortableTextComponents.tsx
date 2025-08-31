'use client'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
const components: PortableTextComponents = { marks: {}, list: {}, types: {} }
export default function PT({ value }: { value: any }) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}
