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
function Slider({ latestIncomes }: any) {
  const [items, setItems] = React.useState([])
  const arrayRef = useRef([null])

  const [title, setTitle] = React.useState('')
  useIsomorphicLayoutEffect(() => {
    let imagesData
    let titleData

    if (latestIncomes) {
      imagesData = latestIncomes.latestIncomesMedia.map(image => ({
        id: image.asset._id,
        url: image.asset.url,
        asset: image.asset,
        image: image,
        key: image.asset._id,
      }))
      titleData = latestIncomes.latestIncomesText
    }
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
