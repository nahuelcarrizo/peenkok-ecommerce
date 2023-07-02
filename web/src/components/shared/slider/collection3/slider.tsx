import React, { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import RemoteFixedSizeImage from '../../image-types/remote-fixed-size-image'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ScrolleableContent from './scrolleableContent'
import SectionHeader from '../header'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

const Container = styled.div`
  ${tw`
    flex
    flex-col
relative
    `}
  overscroll-behavior: none;
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
  collection: {
    collections2: {
      collection2Media: ScrolleableContentProps[] // Array of ScrolleableContentProps
      collection2Text: string // Replace 'string' with the actual type for the 'collection1Text' prop
    }
  } | null // Replace 'null' with the actual type for the 'collection' prop
}
function Slider3({ collection }: SliderProps) {
  const [items, setItems] = useState<ScrolleableContentProps[]>([])
  const [title, setTitle] = useState<string>('')

  useIsomorphicLayoutEffect(() => {
    if (!collection) {
      return
    }

    const collectionMedia = collection.collections2.collection2Media
      ? collection.collections2.collection2Media
      : []

    const collectionText = collection.collections2.collection2Text
      ? collection.collections2.collection2Text
      : ''

    const imagesData: ScrolleableContentProps[] = collectionMedia.map(
      image => ({
        id: image.asset._id,
        url: image.asset.url,
        asset: image.asset,
        image: image,
        key: image.asset._id,
      }),
    )
    const titleData: string = collectionText // Actualizar titleData aquí

    setItems(imagesData)
    setTitle(titleData)
  }, [collection])

  return (
    <>
      <SectionHeader title={title} />
      <Container className="collection3-slider">
        <ScrolleableContent items={items} />
      </Container>
    </>
  )
}

export default Slider3
