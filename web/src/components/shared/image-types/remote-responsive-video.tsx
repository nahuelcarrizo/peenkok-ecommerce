import ReactPlayer from 'react-player'

const RemoteResponsiveVideo = (props: any) => {
  const { url, alt, className } = props

  return (
    <ReactPlayer
      alt={alt}
      className={className}
      url={url}
      muted={true}
      playing={true}
      height="50%"
      width="100%"
    />
  )
}

export default RemoteResponsiveVideo
