import { Container } from '../shared/sharedstyles'
import React from 'react'
import RemoteResponsiveVideo from '../shared/image-types/remote-responsive-video'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledText = styled.div`
  ${tw`
        text-center
        text-xl
        [font-family: 'Circular Std Medium']
        [color: '#003c47']
        [line-height: 1.4]
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
        [color: white]
    `};
  &:hover {
    color: #003c47;
    text-decoration: underline;
  }
  border-bottom: 1px solid black;
`
const StyledVideo = styled(RemoteResponsiveVideo)``
const StyledContainer = styled(Container)`
  height: 500px;
`

const About = ({ about }: any) => {
  const { text, video } = about

  console.log(JSON.stringify(text, null, 2), JSON.stringify(video, null, 2))
  return (
    <StyledContainer>
      <StyledVideo url={video.asset.url} alt="about video" />
      <StyledTextContainer>
        <StyledText>Sección Valores</StyledText>
      </StyledTextContainer>
    </StyledContainer>
  )
}

export default About
