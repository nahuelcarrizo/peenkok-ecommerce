import React, { useRef, useState } from 'react'
import { Router, useRouter } from 'next/router'
import Card from './card/card'
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SectionHeader from './header'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'

const ProdCardTitle = styled.div`
  ${tw`
      flex
      flex-col
      [font-size: 0.8rem]
      justify-center
  `}
  letter-spacing: -.5px;
  padding: 0.5rem 0;
`

const Price = styled.span`
  font-family: 'Circular Std Book';
  font-size: 1.5rem;
`

const ProdCard = styled(Link)`
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
  padding: 1.1vw 1.1vw 0 1.1vw;
  border: 1px solid #191919;
  z-index: 10;
  border-left: none;
  width: 43.5rem !important;
`
const ProductName = styled.div`
  font-family: 'Circular Std Black';
  font-size: 2vw;
  height: 100%;
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  flex-direction: column;
`
interface CardProps {
  title: string
  itemId: string
  imageUrl: string
  asset: string
  image: string
}

/*     const imagesData: ScrolleableContentProps[] = images.map(image => ({
      id: image.asset._id,
      url: image.asset.url,
      asset: image.asset,
      image: image,
      key: image.asset._id,
    }))
 */

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 68vh;
`
function ScrolleableContent({ items, title }) {
  const [products, setProducts] = useState([])
  const [isTitle, setTitle] = useState()
  const container = useRef<HTMLDivElement | null>(null)
  const content = useRef<HTMLDivElement | null>(null)
  const router = useRouter()



  useIsomorphicLayoutEffect(() => {
    if (items) {
      setProducts(items)
    }
    if (title) {
      setTitle(title)
    }
  }, [items, title])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = container.current
      if (wrapper === null) {
        return
      }
      const horizontalSections = wrapper.querySelectorAll('.panel')

      const numSections = horizontalSections.length

      const tl = gsap.to(horizontalSections, {
        x: '-50vw',

        ease: 'none',
      })
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top+=8%',
        pin: true,
        scrub: true,
        anticipatePin: 1,
        pinType: 'transform',
        end: () => '+=' + wrapper.offsetWidth,
        animation: tl,
      })
      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [products])
  

  return (
    <Container ref={container} className="collection1-horizontal">
      {isTitle && <SectionHeader title={isTitle} />}
      <Content>
        {products &&
          products.map(({ _id, images, name, price, index, slug }) => (
            <ProdCard key={_id} className="panel"
              href={
                `/products/${slug.current}`
              }
            >
              <Card images={images} title={_id} />
              <ProdCardTitle>
                <ProductName >{name.toUpperCase()}</ProductName>
                <Price>€ {price}</Price>
              </ProdCardTitle>
            </ProdCard>
          ))}
      </Content>
    </Container>
  )
}

export default ScrolleableContent
