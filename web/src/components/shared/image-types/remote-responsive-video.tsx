import { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'

const RemoteResponsiveVideo = (props: any) => {
  const { url, alt } = props
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
          playing={true}
          height="50%"
          width="100%"
        />
      )}
    </>
  )
}

export default RemoteResponsiveVideo
