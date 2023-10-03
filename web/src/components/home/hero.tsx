import React, { Ref, forwardRef } from 'react'

import { Container } from '../shared/sharedstyles'
import { GiFalloutShelter } from 'react-icons/gi'
import Marquee from 'react-fast-marquee'
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
  /*   width: 100vw; */
  top: 0;
  border: 1px solid black;
`

const StyledImg = styled(RemoteFixedSizeImage)`
  ${tw`
      w-full
      object-cover
      absolute
  `};
  height: 100%;
  /*   bottom: -50px;
  height: 110%; */
`

const ShopNowMarquee = styled.div`
  height: 2.5vw;
  width: 9vw;
  ${tw`
      absolute
      [bottom: 25vh]    
      align-middle
      flex
      `}
  left: 6.7vw;
  transform: translateX(-50%);
  background-color: #f36600;

  font-family: 'Circular Std Bold';
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: -1px;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  overflow-block: hidden !important;
`
const ImgContainer = styled.div`
  height: 100% !important;
  width: 100vw !important;
`
const Hero = forwardRef(function Hero(
  { image }: any,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <StyledContainer ref={ref} id="hero-container">
      <ImgContainer>
        <StyledImg
          image={image[0].image}
          asset={image[0].asset}
          width={1920}
          height={1185}
          alt="hero image"
          className="hero-image"
        />
      </ImgContainer>
      <ShopNowMarquee>
        <Marquee autoFill speed={40}>
          <span style={{ paddingLeft: '8px' }}> SHOP NOW </span>
        </Marquee>
      </ShopNowMarquee>
    </StyledContainer>
  )
})

export default Hero
