import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from './sanity.client'

const builder = imageUrlBuilder({
  projectId: client.config().projectId!,
  dataset: client.config().dataset!,
})

export function urlFor(source: Image) {
  return builder.image(source)
}
