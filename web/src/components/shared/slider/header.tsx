import React, { useEffect, useLayoutEffect, useRef } from 'react'
import tw, { styled } from 'twin.macro'

import Link from 'next/link'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'

const LetterWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  ${tw`font-bold relative`};
  font-size: 18vw;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  color: rgb(25, 25, 25);
  -webkit-font-smoothing: antialiased;
  left: 0.3vw;
  height: 44vh;
`

gsap.registerPlugin(ScrollTrigger)
const StyledLink = styled.div`
  ${tw`relative flex justify-start w-full`}
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: -4%;
`

const Letter = styled.div`
  margin-right: -0.6vw;
  z-index: 1;
`

const SectionHeader = ({ title }) => {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useIsomorphicLayoutEffect(() => {
    /*   if (!ContainerRef.current) return */
    const ctx = gsap.context(() => {
      const array = gsap.utils.toArray<HTMLDivElement>(
        '.header-letter',
        linkRef.current,
      )

      const tl = gsap.timeline()
      ScrollTrigger.create({
        trigger: linkRef.current,
        start: 'top+=20% bottom',

        animation: tl,
      })

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
    <StyledLink ref={linkRef}>
      <LetterWrapper>
        {title.split('').map((letter, index) => (
          <Letter key={index} className="header-letter">
            {letter.toUpperCase()}
          </Letter>
        ))}
      </LetterWrapper>
    </StyledLink>
  )
}

export default SectionHeader
