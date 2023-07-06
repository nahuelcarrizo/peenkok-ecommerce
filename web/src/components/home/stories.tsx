import React from 'react'
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
    `}
  height: 120vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledVideo = styled(RemoteResponsiveVideo)``

const Stories = ({ heroVideo: video }: any) => {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.to('#stories-container', {
        scale: 1.5,
        duration: 1,
        ease: 'none',
      })

      ScrollTrigger.create({
        trigger: '#stories-container',
        start: 'top-=25% top',
        end: () => window.innerHeight,
        pin: true,
        scrub: true,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <StyledContainer id="stories-container">
      <StyledVideo url={video.asset.url} alt="stories video" />
    </StyledContainer>
  )
}

export default Stories
