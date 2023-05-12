import { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'

const RemoteResponsiveVideo = (props: any) => {
  const { url, alt, className } = props
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  return (
    <>
      {isLoaded && (
        <ReactPlayer
          alt={alt}
          url={url}
          muted={true}
          height="100%"
          width="100%"
          className={className}
          controls={false}
          playing={true}
          loop={true}
          playsinline={true}
        />
      )}
    </>
  )
}

export default RemoteResponsiveVideo
