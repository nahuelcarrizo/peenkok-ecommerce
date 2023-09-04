import React, { useContext, useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import styled from 'styled-components'
import tw from 'twin.macro'

interface StyledListProps {}

const StyledList = styled.ul<StyledListProps>`
  ${tw`
      m-0
      list-none
      flex  
      items-center
      w-full
      z-10
      whitespace-nowrap
    `};
  li {
    ${tw`
      px-1
      `};
  }
  font-family: 'Circular Std Medium';
  font-size: 0.85rem;
`

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false)
  /* 
  useEffect(() => {
    gsap.to('#banner', {
      opacity: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: '<',

        toggleActions: 'play none reverse none',
      },
    })
  }, []) */

  return (
    <StyledList>
      <span style={{ paddingBottom: '3px' }}>☻</span>
      <li>EARTH-FRIENDLY PRODUCTS FOR A HAPPIER & GREENER PLACE</li>
      <span style={{ paddingBottom: '3px' }}>☻</span>
      <li>ENJOY FREE SHIPPING FOR EVERY ORDER ABOVE €100</li>
    </StyledList>
  )
}

export default Banner
