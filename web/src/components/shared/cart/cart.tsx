import { CartContext, CartContextType } from '../../../context'
import { useContext, useRef } from 'react'

import React from 'react'
import { gsap } from 'gsap/dist/gsap'
import { isNullOrUndefined } from 'util'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 50%;
  position: absolute;
  top: 0;
  background-color: white;
  overflow: hidden;
  right: 0;
  z-index: 200;
  will-change: transform;
  border: 1px solid black;
`
const Content = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vw 2vw;
`
const Title = styled.div`
  font-family: 'Circular Std Black';
  font-size: 2vw;
  width: 100%;
`
const CloseButton = styled.button`
  font-family: 'Circular Std Medium';
  font-size: 1vw;
  align-self: flex-start;
`

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  height: 100%;
`

const HeaderBag = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vh;
  align-items: flex-start;
`
const CartFader = styled.div`
  position: fixed;
  visibility: hidden;
  background-color: #000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`
const Cart: React.FC = () => {
  const { toggleMenu, setToggleMenu } = useContext<CartContextType>(CartContext)
  const timeline = useRef<gsap.core.Timeline | null>(null)
  const container = useRef<HTMLDivElement | null>(null)
  const fader = useRef<HTMLDivElement | null>(null)
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true })

      timeline.current
        .from(container.current, {
          duration: 0.55,
          xPercent: 100,
          ease: 'power3.inOut',
        })
        .to(
          fader.current,
          {
            autoAlpha: 0.48,
            duration: 0.55,
            ease: 'power3.inOut',
          },
          '<',
        )
    })
    return () => ctx.revert()
  }, [])

  useIsomorphicLayoutEffect(() => {
    toggleMenu ? timeline.current?.play() : timeline.current?.reverse()
  }, [toggleMenu])

  return (
    <>
      <CartFader
        ref={fader}
        onClick={() => setToggleMenu((prev: any) => !prev)}
      />
      <Container ref={container}>
        <Content>
          <HeaderBag>
            <Title>YOUR BAG</Title>
            <CloseButton onClick={() => setToggleMenu((prev: any) => !prev)}>
              CLOSE
            </CloseButton>
          </HeaderBag>
          <ItemsContainer>
            <p style={{ marginTop: '4vh', fontFamily: 'Circular Std Medium' }}>
              Your bag is empty
            </p>
          </ItemsContainer>
        </Content>
      </Container>
    </>
  )
}

export default Cart
