import React, { useRef } from 'react'

import RemoteResponsiveVideo from '../shared/image-types/remote-responsive-video'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

const StyledContainer = styled.div`
  ${tw`
      h-full
      relative
      w-full
    `}
  height: 100vh;
  width: 50vw;
  display: flex;
`
const StyledVideo = styled(RemoteResponsiveVideo)``

const Container = styled.section`
  width: 100vw;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Stories = ({ heroVideo: video }: any) => {
  const container = useRef<HTMLDivElement>(null)
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true })

      tl.to('#stories-container', {
        scale: 2,
      })

      ScrollTrigger.create({
        trigger: container.current,
        start: 'top bottom',
        end: 'top top',
        /*      pin: true, */

        scrub: 2,
        animation: tl,
        onEnter: () => console.log(container.current?.offsetHeight),
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <Container ref={container}>
      <StyledContainer id="stories-container">
        <StyledVideo url={video.asset.url} alt="stories video" />
      </StyledContainer>
    </Container>
  )
}

export default Stories
