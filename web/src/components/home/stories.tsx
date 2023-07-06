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
      border-b
      border-black
      relative
    `}
  height: 800px;
`
const StyledVideo = styled(RemoteResponsiveVideo)`
  ${tw`
      mb-4
      `};
`
const StyledTextContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-center
        items-center
        w-full
        h-full
        absolute
        p-12
        [top:200px]
        [color: white]
    `};
  &:hover {
    color: #003c47;
    text-decoration: underline;
  }
`
const StyledText = styled.div`
  ${tw`
        text-center
        text-xl
        [font-family: 'Circular Std Medium']
        [color: '#003c47']
        [line-height: 1.4]
        `};
`

const Stories = ({ heroVideo: video }: any) => {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
    })
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <StyledContainer>
        <StyledVideo url={video.asset.url} alt="stories video" />
      </StyledContainer>
    </div>
  )
}

export default Stories
