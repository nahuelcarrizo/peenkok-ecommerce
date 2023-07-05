import React, { useEffect } from 'react'
import { getDefaultImage, getImageMetadata } from '../../../../lib/sanity'

import LazyLoadImage from './lazy-image'
import { RemoteImageProps } from './remote-image-props'

const remoteFixed = ({
  className,
  asset,
  alt,
  image,
  height = 1000,
  width = 1000,
}: RemoteImageProps) => {
  const metadata = getImageMetadata(asset)

  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      src={getDefaultImage(image)?.height(height).width(width).url()}
      placeholderSrc={metadata?.lqip || ''}
    />
  )
}

export default remoteFixed
