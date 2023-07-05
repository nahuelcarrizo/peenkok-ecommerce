import React, { useEffect, useRef } from 'react'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

gsap.registerPlugin(ScrollTrigger)

const StyledContainer = styled.div`
  width: 100vw;
  position: relative;
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`

const Container = styled.div`
  position: relative;
  width: 80vw;
  display: flex;
  height: 90vh;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`
const LeftPanel = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
`

const RightPanel = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
`

const LeftText = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  left: 0;
  top: 0;
  will-change: transform;
`
const RightText = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  text-align: center;
  right: 0;
  top: 0;
  right: 0;
  height: 100%;
`

const About = ({ about }: any) => {
  const topBorderRef = useRef<HTMLDivElement>(null)
  const rightBorderRef = useRef<HTMLDivElement>(null)
  const bottomLeftBorderRef = useRef<HTMLDivElement>(null)
  const bottomRightBorderRef = useRef<HTMLDivElement>(null)
  const leftBorderRef = useRef<HTMLDivElement>(null)
  const ContainerRef = useRef<HTMLDivElement>(null)
  const box1 = useRef<HTMLDivElement>(null)
  const box2 = useRef<HTMLDivElement>(null)
  const box3 = useRef<HTMLDivElement>(null)

  const mainContainerRef = useRef<HTMLDivElement>(null)
  const refArray = useRef<Array<HTMLDivElement>>([])

  const totalScrollRef = useRef<number>(0)

  const Sustentabilidad = () => {
    return (
      <p>
        La sustentabilidad nos impulsa a crear soluciones responsables para
        preservar y proteger nuestro entorno.
      </p>
    )
  }
  const Diseño = () => {
    return (
      <p>
        El diseño transforma ideas en formas, colores y texturas que cautivan y
        enriquecen nuestras vidas.
      </p>
    )
  }
  const Innovación = () => {
    return (
      <p>
        La innovación impulsa nuevas perspectivas, desafiando convenciones y
        creando soluciones vanguardistas en el diseño.
      </p>
    )
  }

  useIsomorphicLayoutEffect(() => {
    const leftContent = document.querySelectorAll('.left-text')
    const rightContent = document.querySelectorAll('.right-text')
    const leftPanel = document.querySelector('.left-panel')
    const rightPanel = document.querySelector('.right-panel')

    const ctx = gsap.context(() => {
      const left = gsap.utils.toArray('.left-text')
      const right = gsap.utils.toArray(rightContent)
      gsap.set('.left-text', {
        zIndex: (i, target, targets) => targets.length - i,
      })
      left.forEach((el, i) => {
        const element = el as HTMLElement
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.about-content',
            start: () => 'top -' + window.innerHeight * i,
            end: () => '+=' + window.innerHeight * 2,
            scrub: true,
            pin: mainContainerRef.current,
            pinType: 'transform',

            toggleActions: 'play none reverse none',
          },
        })

        tl.to(element, { duration: 0.5, autoAlpha: 1 }).from(element, {
          duration: 0.5,
          autoAlpha: 0,
        })
      })
    })

    return () => ctx.revert()
  }, [])
  return (
    <div>
      <StyledContainer ref={mainContainerRef} className="about-container">
        <Container ref={ContainerRef} className="about-content">
          <LeftPanel className="left-panel">
            <LeftText className="left-text">Sustentabilidad</LeftText>
            <LeftText className="left-text">Diseño</LeftText>
            <LeftText className="left-text">Innovación</LeftText>
          </LeftPanel>
          <RightPanel className="right-panel">
            <RightText className="right-text">
              <Sustentabilidad />
            </RightText>
            <RightText className="right-text">
              <Diseño />
            </RightText>
            <RightText className="right-text">
              <Innovación />
            </RightText>
          </RightPanel>
        </Container>
      </StyledContainer>
    </div>
  )
}

export default About
