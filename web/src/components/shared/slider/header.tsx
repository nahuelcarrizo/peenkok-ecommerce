import styled, { css, keyframes } from 'styled-components'
import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import tw from 'twin.macro'

const LetterWrapper = tw.div`inline-flex`

const appear = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-180%);
  }
`

const StyledH1 = styled.h1`
  ${tw`font-bold relative pl-4`};
  font-size: 3.5rem;
  font-family: 'Circular Std Black';
  top: 8.3rem;
`

interface LetterProps {
  animate?: boolean
  duration: number
  delay: number
}

const Letter = styled.div<LetterProps>`
  margin-right: -4px;
  ${({ animate, duration, delay }) =>
    animate &&
    css`
      animation: ${appear} ${duration}s cubic-bezier(0, 0.4, 0.2, 1) ${delay}s
        forwards;
    `}
  display: inline;
  width: auto;
`

const StyledLink = styled(Link)`
  ${tw`relative flex justify-start`}
  /*   border-bottom: 2px solid black; */
  opacity: 0.9;
`

const SectionHeader = ({ title }) => {
  const [animate, setAnimate] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const contentLength = title.length

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setAnimate(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 160px 0px',
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <StyledLink href="/" passHref>
      <StyledH1 ref={ref}>
        <LetterWrapper>
          {title.split('').map((letter, index) => (
            <Letter
              key={index}
              animate={animate}
              delay={(index / contentLength) * 0.8}
              duration={1.3}
            >
              {letter.toUpperCase()}
            </Letter>
          ))}
        </LetterWrapper>
      </StyledH1>
    </StyledLink>
  )
}

export default SectionHeader
