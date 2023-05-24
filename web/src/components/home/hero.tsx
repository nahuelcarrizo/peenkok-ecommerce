import { Container } from '../shared/sharedstyles'
import Marquee from 'react-fast-marquee'
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
        relative
        z-20
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
const HeroOverlay = styled.div`
  ${tw`
      absolute
      top-0
      left-0
      w-full h-full 
      `};

  content: '';
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
  z-index: 1;
`
const ShopNowMarquee = styled.div`
  ${tw`
   [height: 8vw] 
      absolute
      [bottom: 15vh]    
      [width: 30%]
      align-middle
      flex
      `}
  left: 50%;
  transform: translateX(-50%);
  background-color: #f36600;
  z-index: 2;
  font-family: 'Circular Std Black';
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: -1px;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  overflow-block: hidden !important;
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
        <ShopNowMarquee>
          <Marquee autoFill speed={40}>
            <span style={{ paddingLeft: '8px' }}> SHOP NOW </span>
          </Marquee>
        </ShopNowMarquee>
        <HeroOverlay />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Hero
