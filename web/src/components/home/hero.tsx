import { Container } from '../shared/sharedstyles'
import React from 'react'
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image'
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
  @media ${device.desktop} {
    padding-top: 20rem;
  }
`

const StyledContainer = styled.div`
  ${tw`
        w-full
        h-full
    `};
  height: 100vh;
`

const StyledImg = styled(RemoteFixedSizeImage)`
  ${tw`
      h-full
      w-full
      object-cover
  `};
`

const Hero = ({ heroImages: image }: any) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledImg
          image={image[0].image}
          asset={image[0].asset}
          alt="hero image"
        />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Hero
