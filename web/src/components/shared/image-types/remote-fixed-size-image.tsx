import React, { useEffect } from 'react'
import { getDefaultImage, getImageMetadata } from '../../../../lib/sanity'

import LazyLoadImage from './lazy-image'
import { RemoteImageProps } from './remote-image-props'

const remoteFixed = ({ className, asset, alt, image }: RemoteImageProps) => {
  const metadata = getImageMetadata(asset)
  /*   console.log(met) */
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      src={getDefaultImage(image)?.url()}
      placeholderSrc={metadata?.lqip || ''}
    />
  )
}

export default remoteFixed
