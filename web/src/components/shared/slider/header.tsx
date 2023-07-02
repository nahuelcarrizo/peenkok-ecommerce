import React, { useEffect, useLayoutEffect, useRef } from 'react'
import tw, { styled } from 'twin.macro'

import Link from 'next/link'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'

const LetterWrapper = tw.div`flex`

gsap.registerPlugin(ScrollTrigger)
const StyledLink = styled(Link)`
  ${tw`relative flex justify-start w-full`}
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: -4%;
  margin-bottom: -1%;
  z-index: 1;
`
const StyledH1 = styled.h1`
  ${tw`font-bold relative`};
  font-size: 16vw;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  color: rgb(25, 25, 25);
  -webkit-font-smoothing: antialiased;
  left: 2.75vw;
`

const Letter = styled.div`
  margin-right: -0.6vw;
`

const SectionHeader = ({ title }) => {
  const ContainerRef = useRef<HTMLAnchorElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (!ContainerRef.current) return
    const ctx = gsap.context(() => {
      const array = gsap.utils.toArray<HTMLDivElement>(
        '.header-letter',
        ContainerRef.current,
      )

      const tl = gsap.timeline()
      ScrollTrigger.create({
        trigger: ContainerRef.current,
        start: 'top+=20% bottom',

        animation: tl,
      })
      console.log('array: ' + array)
      array.forEach((el: HTMLElement, index: number) => {
        tl.from(
          el,
          {
            ease: 'power4.easeOut',
            duration: 1.2,
            y: 210,
          },
          '<+=6%',
        )
      })
    })

    ScrollTrigger.refresh()
    return () => {
      ctx.revert()
    }
  }, [title])

  return (
    <StyledLink href="/" passHref ref={ContainerRef}>
      <StyledH1>
        <LetterWrapper>
          {title.split('').map((letter, index) => (
            <Letter key={index} className="header-letter">
              {letter.toUpperCase()}
            </Letter>
          ))}
        </LetterWrapper>
      </StyledH1>
    </StyledLink>
  )
}

export default SectionHeader
