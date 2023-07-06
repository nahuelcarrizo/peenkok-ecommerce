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
      justify-start
  `}
  letter-spacing: -.5px;
  height: 9vw;
  margin-top: 0.5rem;
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
  width: 27vw !important;
  max-width: 29vw;
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
      const horizontalSections = document.querySelectorAll(
        '.collection2-horizontal .panel',
      )
      const horizontal = document.querySelector('.collection2-horizontal')
      const numSections = horizontalSections.length

      const tl = gsap.to(horizontalSections, {
        xPercent: -40 * numSections,

        ease: 'none',
      })
      ScrollTrigger.create({
        trigger: '.collection2-slider',
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
    <>
      <Container ref={container} className="collection2-horizontal">
        {products.map(({ id, url, asset, image, index }) => (
          <ProdCard key={index} className="horiz-gallery-wrapper panel">
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
    </>
  )
}

export default ScrolleableContent
