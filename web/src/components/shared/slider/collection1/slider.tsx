import React, { useState } from 'react'

import Link from 'next/link'
import RemoteFixedSizeImage from '../../image-types/remote-fixed-size-image'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ScrolleableContent from './scrolleableContent'
import SectionHeader from '../header'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

const Gallery = styled.div`
  ${tw`
    flex
    flex-col
relative
    `}
  overscroll-behavior: none;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`
interface ScrolleableContentProps {
  id: string
  url: string
  asset: any // Replace 'any' with the actual type for the 'asset' prop
  image: any // Replace 'any' with the actual type for the 'image' prop
  key: string
}

interface SliderProps {
  latestIncomes: {
    latestIncomesMedia: ScrolleableContentProps[]
    latestIncomesText: string
  }
}
function Slider({ latestIncomes }: SliderProps) {
  const [items, setItems] = useState<ScrolleableContentProps[]>([])
  const [title, setTitle] = useState<string>('')

  useIsomorphicLayoutEffect(() => {
    if (!latestIncomes) {
      return
    }

    const imagesData: ScrolleableContentProps[] =
      latestIncomes.latestIncomesMedia.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
        asset: image.asset,
        image: image,
        key: image.asset._id,
      }))
    const titleData: string = latestIncomes.latestIncomesText

    setItems(imagesData)
    setTitle(titleData)
  }, [latestIncomes])

  return (
    <>
      <Container>
        <SectionHeader title={title} />
        <Gallery className="collection1-slider">
          <ScrolleableContent items={items} />
        </Gallery>
      </Container>
    </>
  )
}

export default Slider
