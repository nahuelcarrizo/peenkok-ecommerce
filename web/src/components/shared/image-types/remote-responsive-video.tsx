import ReactPlayer from 'react-player'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'
import { useState } from 'react'

const RemoteResponsiveVideo = (props: any) => {
  const { url, alt, className } = props
  const [isLoaded, setIsLoaded] = useState(false)

  useIsomorphicLayoutEffect(() => {
    window.onload = () => {
      const videos = document.querySelectorAll('video')
      videos.forEach(video => {
        ;(video as HTMLVideoElement).play()
      })
    }
    setIsLoaded(true)
  }, [])
  return (
    <>
      {isLoaded && (
        <ReactPlayer
          alt={alt}
          url={url}
          width="50vw"
          height="60vh"
          style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
          }}
          className={className}
          controls={false}
          playing={true}
          loop={true}
          playsinline={true}
          autoPlay="autoPlay"
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
