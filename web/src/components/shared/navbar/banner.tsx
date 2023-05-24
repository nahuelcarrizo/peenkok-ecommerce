import React, { useContext, useEffect, useRef, useState } from 'react'

import Marquee from 'react-fast-marquee'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledList = styled.ul`
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
  font-family: 'Circular Std Black';
  font-size: 1rem;
  color: ${({ isOpen }) => (isOpen ? 'black !important' : '#F36600')};

  transition: color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1)
    ${({ isOpen }) => (isOpen ? '0s' : '0.5s')};
`

const Banner = ({ isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState('false')

  useEffect(() => {
    setIsOpen(isMenuOpen)
  }, [isMenuOpen])

  return (
    <StyledList isOpen={isOpen}>
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
