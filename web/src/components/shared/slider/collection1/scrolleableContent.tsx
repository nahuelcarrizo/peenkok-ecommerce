import React, { useRef, useState } from 'react'

import Link from 'next/link'
import RemoteFixedSizeImage from '../../image-types/remote-fixed-size-image'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SectionHeader from '../header'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

const ProdCardTitle = styled.div`
  ${tw`
      flex
      flex-col
      [font-family: 'Circular Std Black']
      [font-size: 1.2rem]
      justify-center
  `}
  letter-spacing: -.5px;
  height: 9vw;
`

const Price = styled.span`
  font-family: 'Circular Std Book';
  font-size: 1.6rem;
`

const ProdCard = styled.div`
  ${tw`
      flex
      flex-col

  w-full
      h-full
  `};
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
  position: relative;
  padding: 4rem 1.2rem 0vw 1.2rem;
  border: 1px solid #191919;
  z-index: 10;
  border-left: none;
`
const ProductName = styled.div`
  font-family: 'Circular Std Black';
  font-size: 2vw;
`
const ImageLink = styled.a`
  width: 100%;
  height: auto;
  border: 1px solid #191919;
`

const StyledImg = styled(RemoteFixedSizeImage)`
  ${tw`
      object-cover
  `};
  min-width: 27vw !important;
  min-height: 29vh;
`
interface CardProps {
  title: string
  itemId: string
  imageUrl: string
  asset: string
  image: string
}
function Card({ title, itemId, imageUrl, asset, image }: CardProps) {
  return (
    <ImageLink tabIndex={0} key={itemId}>
      <div className="card" style={{ height: '100%' }}>
        <StyledImg
          asset={asset}
          image={image}
          alt={title}
          width={560}
          height={678}
        />
      </div>
    </ImageLink>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  flex-direction: row;
`
function ScrolleableContent({ items }) {
  const [products, setProducts] = useState([])
  const container = useRef<HTMLDivElement | null>(null)
  const content = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    if (items) {
      setProducts(items)
    }
  }, [items])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = container.current
      if (wrapper === null) {
        return
      }
      const horizontalSections = wrapper.querySelectorAll('.panel')

      const numSections = horizontalSections.length

      const tl = gsap.to(horizontalSections, {
        xPercent: -36 * numSections,

        ease: 'none',
      })
      ScrollTrigger.create({
        trigger: '.collection1-slider',
        start: 'top top',
        pin: true,
        scrub: true,

        pinType: 'transform',
        end: () => '+=' + 3000,
        animation: tl,
        anticipatePin: 1,
      })
      ScrollTrigger.refresh()
    })
    return () => ctx.revert()
  }, [products])

  return (
    <Container ref={container} className="collection1-horizontal">
      {products.map(({ id, url, asset, image, index }) => (
        <ProdCard key={index} className="panel">
          <Card
            itemId={id}
            imageUrl={url}
            asset={asset}
            image={image}
            title={id}
          />

          <ProdCardTitle>
            <Link passHref href={'/'}>
              <ProductName>NSW CLUB T-SHIRT</ProductName>
            </Link>
            <Price>€ 10.00</Price>
          </ProdCardTitle>
        </ProdCard>
      ))}
    </Container>
  )
}

export default ScrolleableContent
