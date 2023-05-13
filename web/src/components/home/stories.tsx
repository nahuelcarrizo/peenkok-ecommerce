import React from 'react'
import RemoteResponsiveVideo from '../shared/image-types/remote-responsive-video'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledContainer = styled.div`
  ${tw`
      h-full
      border-b
      border-black
      relative
    `}
  height: 500px;
`
const StyledVideo = styled(RemoteResponsiveVideo)`
  ${tw`
      mb-4
      `};
`
const StyledTextContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-center
        items-center
        w-full
        h-full
        absolute
        p-12
        [top:200px]
        [color: white]
    `};
  &:hover {
    color: #003c47;
    text-decoration: underline;
  }
`
const StyledText = styled.div`
  ${tw`
        text-center
        text-xl
        [font-family: 'Circular Std Medium']
        [color: '#003c47']
        [line-height: 1.4]
        `};
`

const Stories = ({ heroVideo: video }: any) => {
  return (
    <StyledContainer>
      <StyledVideo url={video.asset.url} alt="stories video" />
      <StyledTextContainer>
        <StyledText>
          Video Seccion 'Stories'
          <br />
          (TEASER)
        </StyledText>
      </StyledTextContainer>
    </StyledContainer>
  )
}

export default Stories
