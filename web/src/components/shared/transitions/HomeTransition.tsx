import React, { useState } from 'react'

import { TextPlugin } from 'gsap/dist/TextPlugin'
import gsap from 'gsap'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'
import { useRouter } from 'next/router'
import { useAnimationContext } from '../../../context/AnimationContext'

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
  padding-left: 0.35rem;
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
const wordsToAnimate = [
  'the planet',
  'the planet',
  'the animals',
  'the funghi',
  'everyone',
  'the future',
]

const HomeTransition = () => {
  const { animationStatus } = useAnimationContext();
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to('.page-transition-wrapper', {
            xPercent: 100,
            duration: 0.6,
            ease: 'power2.inOut',
          })
          animationStatus(true)
        },
      })
      const elements = gsap.utils.toArray('.page-transition-inner__text')
      tl.to(
        '#page-transition-inner__for',
        {
          autoAlpha: 1,
          duration: 0.1,
          ease: 'power2.easeIn',
        },
        /*      '<-0.2', */
      )

      for (let i = 0; i < wordsToAnimate.length; i++) {
        const className = `.page-transition-inner__text${i}`
        const word = wordsToAnimate[i]
        const isLastWord = i === wordsToAnimate.length - 1
        tl.to(className, {
          duration: 0.6,
          text: word,
        })

        if (!isLastWord) {
          tl.to(className, {
            xPercent: -100,
            duration: 0.4,
          })
        }
      }
    })

    return () => {
      ctx.revert()
    }
  }, [router])

  return (
    <>
      <Wrapper className="page-transition-wrapper">
        <Inner className="page-transition-inner">
          <Content className="page-transition-inner__content">
            <ForText id="page-transition-inner__for">
              For&nbsp;
              <Span />
            </ForText>
            <RightPanel>
              <Text className="page-transition-inner__text"></Text>
              <Text className="page-transition-inner__text1"></Text>
              <Text className="page-transition-inner__text2"></Text>
              <Text className="page-transition-inner__text3"></Text>
              <Text className="page-transition-inner__text4"></Text>
              <Text className="page-transition-inner__text5"></Text>
              <Text className="page-transition-inner__text6"></Text>
            </RightPanel>
          </Content>
        </Inner>
      </Wrapper>
    </>
  )
}

export default HomeTransition
