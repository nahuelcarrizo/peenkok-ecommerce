import React, { useEffect, useRef } from 'react'

import Navbar from './navbar/navbar'
import Scrollbar from 'smooth-scrollbar'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`

const options = {
  damping: 0.04,
  /*   syncCallbacks: true, */
  renderByPixels: true,
}

const LogoContainer = styled.a`
  /*   width: 131.7rem; */
  height: 15vh;
  align-items: center;
  display: flex;
  position: static;
  z-index: 7;
  transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  will-change: transform;
`

const Logo = styled.img`
  position: fixed;
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0 2.5rem;
  @media ${device.xlarge} {
    padding: 0 1.5rem;
  }
`

const continuousTransform = (offset, isXLargeDevice) => {
  const minOffset = 0
  const maxOffset = 200
  // Map offset to a value between 0 and 1
  const normalizedOffset = Math.min(
    (offset - minOffset) / (maxOffset - minOffset),
    1,
  )

  // Calculate the scale and translation values based on the normalized offset
  const scale = 1 - 0.886 * normalizedOffset

  const translateX = (isXLargeDevice ? -547 : -816) * normalizedOffset
  const translateY = (isXLargeDevice ? -120 : -177) * normalizedOffset
  // Construct and return the transform string
  return `translate(${translateX}px, ${translateY}px) translate3d(0px, 0px, 0px) scale(${scale}, ${scale})`
}

const Scroll = ({ navbarItems }) => {
  const fixedRef = useRef(null)
  const StyledLogo = useRef<HTMLAnchorElement>(null)
  const isXLargeDevice = useMediaQuery({ query: device.xlarge })

  useEffect(() => {
    const fixed = fixedRef.current
    const elements = document.getElementsByClassName('scrollbar-track show')
    if (elements.length > 0) {
      elements[0].style.opacity = '0'
    }

    const scrollbar = () => {
      Scrollbar.init(document.body, options).addListener(function (status) {
        const offset = status.offset

        fixed.style.top = offset.y + 'px'
        fixed.style.left = offset.x + 'px'

        const styledLogo = StyledLogo.current
        if (styledLogo) {
          styledLogo.style.transform = continuousTransform(
            offset.y,
            isXLargeDevice,
          )
        }
      })
    }

    scrollbar()
  }, [])

  return (
    <StyledDiv id="fixedNav" ref={fixedRef}>
      <Navbar navbarItems={navbarItems} />
      <LogoContainer href="/" ref={StyledLogo}>
        <Logo src="/assets/LogoPeenkok_black.svg" alt="Logo" />
      </LogoContainer>
    </StyledDiv>
  )
}

export default Scroll
