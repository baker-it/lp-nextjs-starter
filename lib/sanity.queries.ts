import { groq } from 'next-sanity'

export const landingPageBySlug = groq`*[_type == "landingPage" && slug.current == $slug][0]{
  title, slug, ab, heroA, heroB, usps, socialProof, pricing, faq, seo
}`

export const firstLandingPage = groq`*[_type == "landingPage"]|order(_createdAt asc)[0]{
  title, slug, ab, heroA, heroB, usps, socialProof, pricing, faq, seo
}`
