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
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: fixed;
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
        onComplete: () => {
          gsap.to('.page-transition-wrapper', {
            xPercent: 100,
            duration: 0.6,
            ease: 'power2.inOut',
          })
        },
      })
      const elements = gsap.utils.toArray('.page-transition-inner__text')

      tl.to('#top-border', {
        width: '100%',
        duration: 0.2,
        ease: 'power2.easeIn',
      })
        .to('#right-border', {
          height: '100%',
          duration: 0.1,

          ease: 'linear',
        })
        .to('#bottom-border', {
          width: '100%',
          duration: 0.1,
          ease: 'linear',
        })
        .to('#left-border', {
          height: '100%',
          duration: 0.23,
          ease: 'power2.easeOut',
        })
      tl.to(
        '#page-transition-inner__for',
        {
          autoAlpha: 1,
          duration: 0.1,
          ease: 'none',
        },
        '<-0.2',
      )
      elements.forEach((element: any, index) => {
        tl.to(element, {
          autoAlpha: 1,
          xPercent: 103,
          duration: 0.8,
        })
        tl.to(element, {
          xPercent: -100,
          duration: 0.4,
        })

        /*       gsap.to('.page-transition-wrapper', {
        xPercent: 100,
        duration: 2,
        delay: 8,
        ease: 'power2.inOut',
      }) */
      })
    })

    return () => {
      ctx.revert()
    }
  }, [router])

  return (
    <>
      <Wrapper className="page-transition-wrapper">
        <Inner className="page-transition-inner">
          {/*           <TopBorder id="top-border" />
          <BottomBorder id="bottom-border" />
          <LeftBorder id="left-border" />
          <RightBorder id="right-border" /> */}

          <Content className="page-transition-inner__content">
            <ForText id="page-transition-inner__for">
              For&nbsp;
              <Span />
            </ForText>
            <RightPanel>
              <Text className="page-transition-inner__text"> the planet</Text>
              <Text className="page-transition-inner__text">the animals</Text>
              <Text className="page-transition-inner__text">the people</Text>
              <Text className="page-transition-inner__text">the plants</Text>
              <Text className="page-transition-inner__text">the funghi</Text>
              <Text className="page-transition-inner__text">everyone</Text>
              <Text className="page-transition-inner__text">the future</Text>
            </RightPanel>
          </Content>
        </Inner>
      </Wrapper>
    </>
  )
}

export default PageTransition
