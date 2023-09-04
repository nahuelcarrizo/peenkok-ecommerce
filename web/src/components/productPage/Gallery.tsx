import React, { useRef, useState } from 'react'

import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

const Container = styled.div`
  width: 120%;
  margin: 1vw;
  display: flex;
  flex-direction: row;
  overscroll-behavior: none;
  overflow: hidden;
  border: 1px solid black;
  position: relative;
`

const Image = styled(RemoteFixedSizeImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
interface ContentProps {
  left: string
}

const Content = styled.div<ContentProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: ${props => props.left};
  display: flex;
  will-change: transform;
  padding: 2vw;
`
const Gallery = ({ product }) => {
  const [item, setItem] = useState()
  const container = useRef(null)

  useIsomorphicLayoutEffect(() => {
    setItem(product)
  }, [product])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = container.current
      if (wrapper === null) {
        return
      }

      const horizontalSections = wrapper.querySelectorAll('.panel')
      const tl = gsap.to(horizontalSections, {
        xPercent: -200,
        ease: 'none',
      })

      const resizeHandler = () => {
        const containerWidth = wrapper.offsetWidth
        const endValue = horizontalSections.length * containerWidth
        tl.vars.end = `+=${endValue}`
        ScrollTrigger.refresh()
      }

      ScrollTrigger.create({
        animation: tl,
        trigger: document.body,
        start: 'top top',
        pin: '.product-container',
        scrub: 0.1,
        anticipatePin: 1,
        pinType: 'transform',
        pinSpacing: true,
        end: () => `+=${(horizontalSections.length - 2) * wrapper.offsetWidth}`,
      })
      ScrollTrigger.refresh()
    })
    /*     window.addEventListener('resize', resizeHandler) */
    return () => {
      ctx.revert()
      /*      window.removeEventListener('resize', resizeHandler) */
    }
  }, [item])

  return (
    <Container ref={container}>
      {item &&
        product.images.map((image, index) => (
          <Content className="panel" key={index} left={`${index * 100}%`}>
            <Image
              asset={image.asset}
              image={image}
              width={760}
              height={860}
              alt={'image'}
            />
          </Content>
        ))}
    </Container>
  )
}

export default Gallery
