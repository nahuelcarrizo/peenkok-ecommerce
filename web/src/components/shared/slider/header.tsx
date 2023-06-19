import React, { useEffect, useLayoutEffect, useRef } from 'react'
import tw, { styled } from 'twin.macro'

import Link from 'next/link'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'

gsap.registerPlugin(ScrollTrigger)

const LetterWrapper = tw.div`inline-flex`

const StyledH1 = styled.h1`
  ${tw`font-bold relative`};
  font-size: 16vw;
  font-family: 'Circular Std Black';
  left: 1.4vw;
  margin: 0vw 0px;
`

const Letter = styled.div`
  margin-right: -0.8vw;
`

const StyledLink = styled(Link)`
  ${tw`relative flex justify-start w-full`}
  height: 17vw;
  opacity: 0.9;
`

const SectionHeader = ({ title }) => {
  const letterContainerRef = useRef(null)
  const letterRefs = useRef([])

  useEffect(() => {
    const select = gsap.utils.selector(letterContainerRef.current)
    const letters = select('.gsanim')
    const tl = gsap.timeline()
    tl.fromTo(
      letters,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: letterContainerRef.current,
          start: 'top bottom',
          markers: true,
          toggleActions: 'play none none reverse',
        },
      },
    )
  }, [])

  return (
    <StyledLink href="/" passHref>
      <StyledH1>
        <LetterWrapper ref={letterContainerRef} className="letter-container">
          {title.split('').map((letter, index) => (
            <div
              key={index}
              className="gsanim"
              style={{ marginRight: '-0.8vw' }}
            >
              {letter.toUpperCase()}
            </div>
          ))}
        </LetterWrapper>
      </StyledH1>
    </StyledLink>
  )
}

export default SectionHeader
