import React, { useEffect, useLayoutEffect, useRef } from 'react'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'

gsap.registerPlugin(ScrollTrigger)
const StyledContainer = styled.div`
  width: 100vw;
  position: relative;
  height: 100vh;
`

const CenteredElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 30vh;
  background-color: #fff;
`

const VerticalBorder = styled.div`
  position: absolute;
  transform-origin: top left;
  height: 100%;
`
const HorizontalBorder = styled.div`
  position: absolute;
  width: 100%;

  transform-origin: top left;
`

const TopBorder = styled(HorizontalBorder)`
  top: 0;
  border-top: 1px solid black;
`

const RightBorder = styled(VerticalBorder)`
  right: 0;
  border-right: 1px solid black;
`

const BottomBorder = styled(HorizontalBorder)`
  bottom: 0;
  border-bottom: 1px solid black;
`

const LeftBorder = styled(VerticalBorder)`
  left: 0;
  border-left: 1px solid black;
`

const About = ({ about }: any) => {
  const topBorderRef = useRef<HTMLDivElement>(null)
  const rightBorderRef = useRef<HTMLDivElement>(null)
  const bottomBorderRef = useRef<HTMLDivElement>(null)
  const leftBorderRef = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 2,
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          markers: true,
          toggleActions: 'play none none reverse',
        },
      })
      if (
        topBorderRef.current &&
        rightBorderRef.current &&
        bottomBorderRef.current &&
        leftBorderRef.current &&
        container.current
      ) {
        tl.to(topBorderRef.current, {
          scaleX: 0,
          transformOrigin: 'top left',
          ease: 'power2.out',
        })
          .to(
            rightBorderRef.current,
            {
              scaleY: 0,
              transformOrigin: 'top right',
              ease: 'power2.out',
            },
            '<',
          )
          .to(
            bottomBorderRef.current,
            {
              scaleX: 0,
              transformOrigin: 'bottom right',
              ease: 'power2.out',
            },
            '<',
          )
          .to(
            leftBorderRef.current,
            {
              scaleY: 0,
              transformOrigin: 'bottom left',
              ease: 'power2.out',
            },
            '<',
          )
      }
    }, [container.current])
    return () => ctx.revert()
  }, [])
  return (
    <StyledContainer>
      <CenteredElement className="container" ref={container}>
        <TopBorder ref={topBorderRef} className="topBorder" />
        <RightBorder ref={rightBorderRef} />
        <BottomBorder ref={bottomBorderRef} />
        <LeftBorder ref={leftBorderRef} />
      </CenteredElement>
    </StyledContainer>
  )
}

export default About
