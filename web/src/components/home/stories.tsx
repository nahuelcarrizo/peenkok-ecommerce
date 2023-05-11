import React, { useEffect, useRef } from 'react'

import { Container } from '../shared/sharedstyles'
import RemoteResponsiveVideo from '../shared/image-types/remote-responsive-video'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledContainer = styled.div`
  ${tw`
      h-full
      border-b
      border-black
    `}
`
const Styledvideo = styled(RemoteResponsiveVideo)`
  ${tw`
      p-4
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
      <Styledvideo url={video.asset.url} alt="stories video"></Styledvideo>
    </StyledContainer>
  )
}

export default Stories
