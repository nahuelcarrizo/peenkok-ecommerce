import { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'

const RemoteResponsiveVideo = (props: any) => {
  const { url, alt, className } = props
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    window.onload = () => {
      const videos = document.querySelectorAll('video')
      videos.forEach(video => {
        ;(video as HTMLVideoElement).play()
      })
    }
    setIsLoaded(true)S
  }, [])
  return (
    <>
      {isLoaded && (
        <ReactPlayer
          alt={alt}
          url={url}
          height="100%"
          width="100%"
          className={className}
          controls={false}
          playing={true}
          loop={true}
          playsinline={true}
          autoplay="autoplay"
          attributes={{
            muted: true,
            loop: true,
            playsInline: true,
            preload: 'metadata',
          }}
        />
      )}
    </>
  )
}

export default RemoteResponsiveVideo
