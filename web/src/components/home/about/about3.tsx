import {
  BoxLeft,
  BoxRight,
  Container,
  H2,
  LeftContent,
  PanelLeft,
  PanelRight,
  RightContent,
} from './about.styles'
import React, { useRef } from 'react'

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'

const About = ({ about }: any) => {
  const ContainerRef = useRef<HTMLDivElement>(null)

  const box = useRef(null)

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
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.panel')
      const scrollEffect = (targets, config) => {
        return gsap.from(config.box, {
          overwrite: 'auto',
          scrollTrigger: {
            trigger: config.parent,
            start: 'top center',
            preventOverlaps: true,
            pin: config.box,

            end: 'bottom center',
            pinSpacing: true,
            fastScrollEnd: true,
            pinType: 'transform',
            onEnter: () => {
              gsap.to(config.box, {
                autoAlpha: 1,
              })
            },
            onLeave: () => {
              gsap.to(config.box, {
                autoAlpha: 0,
              })
            },
            onEnterBack: () => {
              gsap.to(config.box, {
                autoAlpha: 1,
              })
            },
            onLeaveBack: () => {
              gsap.to(config.box, {
                autoAlpha: 0,
              })
            },
          },
        })
      }

      gsap.registerEffect({
        name: 'scrollEffect',
        effect: (targets, config) => {
          return scrollEffect(targets, config)
        },
        extendTimeline: true,
      })

      const tl = gsap.timeline()

      tl.scrollEffect({}, { parent: '#sust-panel', box: '#sust-box' })
      tl.scrollEffect({}, { parent: '#dis-panel', box: '#dis-box' })
      tl.scrollEffect({}, { parent: '#inn-panel', box: '#inn-box' })

      tl.scrollEffect({}, { parent: '#sust-right', box: '#sust-right-box' })
      tl.scrollEffect({}, { parent: '#dis-right', box: '#dis-right-box' })
      tl.scrollEffect({}, { parent: '#inn-right', box: '#inn-right-box' })
    })
    return () => ctx.revert()
  }, [])
  return (
    <Container ref={ContainerRef} className="about-content">
      <LeftContent>
        <PanelLeft className="panel" id="sust-panel">
          <BoxLeft id="sust-box">
            <H2>Sustentabilidad</H2>
          </BoxLeft>
        </PanelLeft>
        <PanelLeft className="panel" id="dis-panel">
          <BoxLeft id="dis-box">
            <H2>Diseño</H2>
          </BoxLeft>
        </PanelLeft>
        <PanelLeft className="panel" id="inn-panel">
          <BoxLeft id="inn-box">
            <H2>Innovación</H2>
          </BoxLeft>
        </PanelLeft>
      </LeftContent>
      <RightContent>
        <PanelRight id="sust-right">
          <BoxRight id="sust-right-box">
            <Sustentabilidad />
          </BoxRight>
        </PanelRight>
        <PanelRight id="dis-right">
          <BoxRight id="dis-right-box">
            <Diseño />
          </BoxRight>
        </PanelRight>
        <PanelRight id="inn-right">
          <BoxRight id="inn-right-box">
            <Innovación />
          </BoxRight>
        </PanelRight>
      </RightContent>
    </Container>
  )
}

export default About
