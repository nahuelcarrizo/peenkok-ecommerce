import { Container } from '../shared/sharedstyles'
import { GiFalloutShelter } from 'react-icons/gi'
import Marquee from 'react-fast-marquee'
import React from 'react'
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image'
import { device } from '../../config/device'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive'

const StyledContainer = styled.div`
  ${tw`
flex-col  
justify-center
overflow-hidden
        relative
    `};
  height: 115vh;
  width: 100vw;
`

const StyledImg = styled(RemoteFixedSizeImage)`
  ${tw`
      w-full
      object-cover
      absolute
  `};
  bottom: -50px;
  height: 110%;
`
const HeroOverlay = styled.div`
  ${tw`
      absolute
      top-0
      left-0
      w-full h-full 
      `};

  content: '';
  background: linear-gradient(rgba(19, 18, 18, 0.27), rgba(0, 0, 0, 0.01));
  z-index: 1;
`
const ShopNowMarquee = styled.div`
  height: 2.5vw;
  width: 12vw;
  ${tw`
      absolute
      [bottom: 34vh]    
      align-middle
      flex
      `}
  left: 10.1vw;
  transform: translateX(-50%);
  background-color: #f36600;
  z-index: 2;
  font-family: 'Circular Std Black';
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: -1px;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  overflow-block: hidden !important;
`

const Hero = ({ image }: any) => {
  return (
    <StyledContainer>
      <StyledImg
        image={image[0].image}
        asset={image[0].asset}
        alt="hero image"
        className="gs-parallax"
      />
      <ShopNowMarquee className="add-lag">
        <Marquee autoFill speed={40}>
          <span style={{ paddingLeft: '8px' }}> SHOP NOW </span>
        </Marquee>
      </ShopNowMarquee>
    </StyledContainer>
  )
}

export default Hero
