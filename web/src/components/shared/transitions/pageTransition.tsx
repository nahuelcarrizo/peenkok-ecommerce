import React, { useState } from 'react'

import { TextPlugin } from 'gsap/dist/TextPlugin'
import gsap from 'gsap'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'
import { useRouter } from 'next/router'

gsap.registerPlugin(TextPlugin)
const TopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /*   width: 100%; */
  height: 0.5px;
  background-color: black;
  transform-origin: left;
`
const BottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  /*   width: 100%; */
  height: 0.5px;
  background-color: black;
  transform-origin: bottom right;
`
const LeftBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0.5px;
  background-color: black;
  transform-origin: bottom;
  /*   height: 100%; */
`
const RightBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.6px;
  background-color: black;
  /* height: 100%; */
  transform-origin: top;
`
const Wrapper = styled.div`
  background-color: #f4a056;
  height: 100vh;
  width: 100vw;
  position: absolute;
  /*   transform: translate(-100, 0); */
  z-index: 2000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   overflow: hidden; */
`
const Inner = styled.div`
  height: 60vh;
  width: 60vw;
  position: absolute;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  position: absolute;
  transform: translate(-100%, 0);
  width: 100%;
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
`
const ForText = styled.div`
  text-align: center;
  justify-content: end;
  visibility: hidden;
  font-size: 2.1rem;
  font-family: 'Circular Std Medium';
  align-items: center;
  display: flex;
  width: 45%;
  position: relative;
`
const RightPanel = styled.div`
  display: flex;
  position: relative;
  align-items: end;
  width: 55%;
  height: 100%;
  font-size: 2.1rem;
  font-family: 'Circular Std Medium';
  overflow: hidden;
`
const Span = styled.span`
  position: absolute;
  width: 3px;
  height: 80%;
  right: 0;
  background-color: #f36600;
  border-radius: 25%;
`
const PageTransition = () => {
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const master = gsap.timeline()
      const tl = gsap.timeline({
        duration: 0.5,
        ease: 'expo.easeIn',
        delay: -1,
      })

      tl.from('.page-transition-wrapper', {
        xPercent: -100,
      })
        .to('.page-transition-wrapper', {
          xPercent: 0,
        })
        .to('.page-transition-wrapper', {
          xPercent: 200,
        })
    })

    return () => {
      ctx.revert()
    }
  }, [router])

  return (
    <>
      <Wrapper className="page-transition-wrapper"></Wrapper>
    </>
  )
}

export default PageTransition
