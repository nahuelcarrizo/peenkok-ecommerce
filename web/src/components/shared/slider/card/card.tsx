import { Container, ImgContainer, StyledImg } from './card.styles'
import React, { useRef, useState } from 'react'

import Banner from './banner'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

function Card({ title, images }) {
  const imgRef = useRef(null)
  const ContainerImgRef = useRef(null)
  const bannerRef = useRef<HTMLDivElement>(null)

  const img = gsap.utils.selector(ContainerImgRef)

  useIsomorphicLayoutEffect(() => {
    console.log(images[0].asset)
    const ctx = gsap.context(self => {
      self.add(
        'hover',
        e => {
          gsap.to(bannerRef.current, {
            xPercent: -100,
            duration: 0.5,
            ease: 'expo',
          })
          gsap.to(img('.card-image'), { rotate: 10 })
        },
        imgRef.current,
      )
      self.add('hoverOut', e => {
        gsap.to(bannerRef.current, {
          xPercent: 100,
          duration: 1.9,
          ease: 'power2.easeOut',
        })
        gsap.to(img('.card-image'), { rotate: 0 })
      })
    })

    ContainerImgRef.current.addEventListener('mouseenter', e => ctx.hover(e))
    ContainerImgRef.current.addEventListener('mouseleave', e => ctx.hoverOut(e))
    return () => {
      ctx.revert()
      ContainerImgRef.current.removeEventListener('mouseenter', e =>
        ctx.hover(e),
      )
      ContainerImgRef.current.removeEventListener('mouseleave', e =>
        ctx.hover(e),
      )
    }
  }, [])

  return (
    <Container className="card-container" ref={ContainerImgRef}>
      <ImgContainer>
        <StyledImg
          asset={images[0].asset}
          image={images[0]}
          alt={title}
          width={760}
          height={878}
          className="card-image"
        />
      </ImgContainer>
      <Banner ref={bannerRef} />
    </Container>
  )
}

export default Card
