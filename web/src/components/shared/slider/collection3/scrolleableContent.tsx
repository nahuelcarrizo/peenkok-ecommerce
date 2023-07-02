import React, { useRef, useState } from 'react'

import Link from 'next/link'
import RemoteFixedSizeImage from '../../image-types/remote-fixed-size-image'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SectionHeader from '../header'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

const Panel = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  `}
`
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
  padding: 3.9vw 3.9vw 0vw 3.9vw;
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
  max-width: 29vw !important;
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
const Strip = styled.div`
  ${tw`
  flex-col
    `}
`
const Content = styled.div`
  height: 100vh;
  width: 6ch;
  display: flex;
  flex-direction: row;
  overscroll-behavior: none;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
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
        '.collection3-horizontal .panel',
      )
      const horizontal = document.querySelector('.collection3-horizontal')
      const numSections = horizontalSections.length

      const tl = gsap.to(horizontalSections, {
        xPercent: -42.6 * numSections,

        ease: 'none',
      })
      ScrollTrigger.create({
        trigger: '.collection3-slider',
        start: 'top+=27% top-=5.5%',
        pin: true,
        anticipatePin: 1,
        scrub: true,

        pinType: 'transform',
        end: () => '+=' + 3000,
        animation: tl,
      })
      ScrollTrigger.refresh()
    })
    return () => ctx.revert()
  }, [products])

  return (
    <>
      <Container ref={container} className="collection3-horizontal">
        {products.map(({ id, url, asset, image, index }) => (
          <ProdCard key={index} className="horiz-gallery-wrapper panel">
            <Strip className="horiz-gallery-strip">
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
            </Strip>
          </ProdCard>
        ))}
      </Container>
    </>
  )
}

export default ScrolleableContent