import { Container, ImgContainer, StyledImg } from './card.styles'
import React, { useRef, useState } from 'react'

import Banner from './banner'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '../../../../hooks/isomorphicEffect'

function Card({ title, images }) {
  const imgRef = useRef(null)
  const bannerRef = useRef(null)

  const img = gsap.utils.selector(imgRef)

  useIsomorphicLayoutEffect(() => {
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

    imgRef.current.addEventListener('mouseover', e => ctx.hover(e))
    imgRef.current.addEventListener('mouseout', e => ctx.hoverOut(e))
    return () => {
      ctx.revert()
      imgRef.current.removeEventListener('mouseover', e => ctx.hover(e))
      imgRef.current.removeEventListener('mouseout', e => ctx.hover(e))
    }
  }, [])

  return (
    <Container className="card-container">
      <ImgContainer ref={imgRef}>
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