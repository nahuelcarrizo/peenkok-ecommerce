import React, { useContext, useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import styled from 'styled-components'
import tw from 'twin.macro'

interface StyledListProps {
  isOpen: boolean
}

const StyledList = styled.ul<StyledListProps>`
  ${tw`
      m-0
      list-none
      flex  
      items-center
      w-full
      z-10
      flex
      whitespace-nowrap
    `};
  li {
    ${tw`
      px-1
      `};
  }
  color: #f36600;
  font-family: 'Circular Std Black';
  font-size: 1.2em;
  @media (max-width: 1024px) {
    color: ${({ isOpen }) => (isOpen ? 'black !important' : '#F36600')};
    transition: color 0.1s cubic-bezier(0.26, 1.04, 0.54, 1)
      ${({ isOpen }) => (isOpen ? '0s' : '0.5s')};
  }
`

const Banner = ({ isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    gsap.to('#banner', {
      opacity: 0,
      /*       display: 'none', */
      duration: 0.2,
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: '<',

        toggleActions: 'play none reverse none',
      },
    })
  }, [])
  /* 
  useEffect(() => {
    setIsOpen(isMenuOpen)
  }, [isMenuOpen]) */

  return (
    <StyledList isOpen={isOpen} id="banner">
      <span style={{ paddingBottom: '3px' }}>☻☻☻</span>
      <li>EARTH-FRIENDLY PRODUCTS FOR A HAPPIER & GREENER PLACE</li>
      <span style={{ paddingBottom: '3px' }}>☻☻☻</span>
      <li>ENJOY FREE SHIPPING FOR EVERY ORDER ABOVE €100</li>
    </StyledList>
  )
}

export default Banner
