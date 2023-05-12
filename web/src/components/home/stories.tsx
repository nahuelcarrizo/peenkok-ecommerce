import React from 'react'
import RemoteResponsiveVideo from '../shared/image-types/remote-responsive-video'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledContainer = styled.div`
  ${tw`
      h-full
      border-b
      border-black
    `}
  height: 500px;
`
const StyledVideo = styled(RemoteResponsiveVideo)`
  ${tw`
      mb-4
      `};
`

const Stories = ({ heroVideo: video }: any) => {
  /*   const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, []) */
  return (
    <StyledContainer>
      <StyledVideo url={video.asset.url} alt="stories video" />
    </StyledContainer>
  )
}

export default Stories
