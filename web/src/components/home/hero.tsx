import { Container } from '../shared/sharedstyles'
import React from 'react'
import { device } from '../../config/device'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useMediaQuery } from 'react-responsive'

const StyledHeader = styled.header`
  ${tw`
        flex
        relative
        w-full
    `};
  margin-top: 5.5rem;
  @media ${device.desktop} {
    padding-top: 20rem;
  }
`

const StyledImage = styled.img`
  ${tw`
        w-full
        object-cover
        h-full
    `};
  border: 1px solid black;
`

const StyledContainer = styled.div`
  ${tw`
        mt-4
        ml-4
        mr-4
        w-full
        h-full
    `};
  height: 35vh;
`

const StyledVideo = styled.video`
  ${tw`
        h-full
    `};
  width: 100%;
  object-fit: cover;
  border: 1px solid black;
  @media ${device.desktop} {
    height: 520px;
  }
`

const Hero = ({ heroVideo: video }: any) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: device.desktop })
  return (
    <StyledHeader>
      <StyledContainer>
        {isDesktopOrLaptop ? (
          <StyledVideo autoPlay muted loop id="myVideo">
            <source src={video.asset.url} />
          </StyledVideo>
        ) : (
          <StyledImage src={'/assets/heroTshirt.jpg'} alt="hero image" />
        )}
        {/*                     <StyledText>
                    The Forest Collection is for those who want to embrace their love for nature without sacrificing their sense of style.<br/>This collection features a range of unique designs, with intricate detailing and sustainable<br />materials that help protect the planet we call home.Each piece in the Forest Collection is as durable as it is eco-friendly.
                    </StyledText> */}
      </StyledContainer>
    </StyledHeader>
  )
}

export default Hero
