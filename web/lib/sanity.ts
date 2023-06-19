import {
  SanityImageSource as SanityImageSourceAsset,
  getImageAsset,
} from '@sanity/asset-utils'

import { ClientConfig } from '@sanity/client'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config: ClientConfig = {
  projectId: 'vvhlk67r',
  dataset: 'development',
  useCdn: true,
  apiVersion: '2021-03-25',
}
export const sanity = createClient(config)

export const sanityWriteClient = createClient({
  projectId: 'vvhlk67r',
  dataset: 'development',
  token: process.env.sanityAccessToken,
  useCdn: true,
})

export const builder = imageUrlBuilder(sanity)

export const getDefaultImage = (image: any) =>
  builder.image(image).auto('format')

export const getImagePlaceholder = (asset: SanityImageSourceAsset) =>
  asset ? getImageAsset(asset).metadata.lqip : ''

export const getImageMetadata = (asset: SanityImageSourceAsset) =>
  asset ? getImageAsset(asset).metadata : null
