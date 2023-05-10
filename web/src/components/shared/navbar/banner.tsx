import React, { useEffect, useRef, useState } from 'react'

import Marquee from 'react-fast-marquee'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledList = styled.ul`
  ${tw`
      list-none
      flex  
      items-center
      w-full
      z-10
      flex
      whitespace-nowrap
    `};
  font-family: 'Circular Std Regular';
  font-size: 1.6rem;
  &:hover {
    color: #003c47;
  }
`

const Banner = () => {
  return (
    <StyledList>
      <span>☻☻☻</span>
      <li>15/6 - ENJOY BEACH CLEAN AT BARCELONA SPAIN</li>
      <span>☻☻☻</span>
      <li>
        1% FOR EACH ORDER IS DONATED TO AN ORGANIZATION DEDICATED TO
        PRESERVATION & PROTECTION OF THE ENVIRONMENT
      </li>
    </StyledList>
  )
}

export default Banner
