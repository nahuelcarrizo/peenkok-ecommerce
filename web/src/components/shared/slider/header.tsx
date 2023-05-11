import styled, { css, keyframes } from 'styled-components'
import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import tw from 'twin.macro'

const LetterWrapper = tw.div`flex flex-row`

const appear = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-180%);
  }
`

const StyledH1 = styled.h1`
  ${tw`text-7xl font-bold relative pl-4`};
  font-weight: bold;
  font-family: 'Circular Std Black';
  top: 8.5rem;
`

interface LetterProps {
  animate?: boolean
  duration: number
  delay: number
}

const Letter = styled.div<LetterProps>`
  margin-right: -4px;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  ${({ animate, duration, delay }) =>
    animate &&
    css`
      animation: ${appear} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s
        forwards;
    `}
`

const StyledLink = styled(Link)`
  ${tw`relative`}
  opacity: 0.9;
`

const SectionHeader = ({ title }) => {
  const [animate, setAnimate] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const contentLength = title.length

  useEffect(() => {
    const isVisited = sessionStorage.getItem('headerVisited')

    if (!isVisited) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimate(true)
            sessionStorage.setItem('headerVisited', 'true')
            observer.unobserve(entry.target)
          }
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px 0px 0px',
        },
      )
      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    } else {
      setAnimate(true)
    }
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
              duration={2}
            >
              {letter}
            </Letter>
          ))}
        </LetterWrapper>
      </StyledH1>
    </StyledLink>
  )
}

export default SectionHeader
