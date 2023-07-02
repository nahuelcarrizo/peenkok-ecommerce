import { useEffect, useRef } from 'react'

import Link from 'next/link'
import React from 'react'
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
function Slider({ collection }) {
  const [items, setItems] = React.useState([])
  const arrayRef = useRef([null])

  const [title, setTitle] = React.useState('')

  useIsomorphicLayoutEffect(() => {
    let imagesData
    let titleData

    if (collection) {
      const collectionMedia = collection.collections1.collection1Media
        ? collection.collections1.collection1Media
        : []

      const collectionText = collection.collections1.collection1Text
        ? collection.collections1.collection1Text
        : ''

      imagesData = collectionMedia.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
        asset: image.asset,
        image: image,
        key: image.asset._id,
      }))
      titleData = collectionText // Actualizar titleData aquí
    }
    setItems(imagesData)
    setTitle(titleData)
  }, [collection])

  return (
    <>
      <SectionHeader title={title} />
      <Container className="collection2-slider">
        <ScrolleableContent items={items} />
      </Container>
    </>
  )
}

export default Slider
