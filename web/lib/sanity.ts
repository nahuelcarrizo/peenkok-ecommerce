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
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
}
export const sanity = createClient(config)

// export const sanityWriteClient = createClient({
//   projectId: 'vvhlk67r',
//   dataset: 'development',
//   apiVersion: '2021-08-31',
//   token: process.env.sanityAccessToken,
//   useCdn: true,
// })

export const builder = imageUrlBuilder(sanity)

export const getImageMetadata = (asset: SanityImageSourceAsset) => {
  try {
    return asset ? getImageAsset(asset).metadata.lqip : ''
  } catch (error) {
    console.error('Error al obtener metadatos de la imagen:', error)
    return ''
  }
}

export const getImagePlaceholder = (asset: SanityImageSourceAsset) =>
  asset ? getImageAsset(asset).metadata.lqip : ''

export const getDefaultImage = image => builder.image(image)
