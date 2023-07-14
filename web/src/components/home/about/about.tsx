import {
  BottomBorder,
  BoxLeft,
  BoxRight,
  Container,
  H2,
  Inner,
  LeftBorder,
  LeftContent,
  PanelLeft,
  PanelRight,
  RightBorder,
  RightContent,
  TopBorder,
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

  const Section = ({
    id,
    title,
    content,
  }: {
    id: string
    title: string
    content: JSX.Element
  }) => {
    return (
      <PanelLeft className="panel" id={`${id}-panel`}>
        <BoxLeft id={`${id}-box`}>
          <H2>{title}</H2>
        </BoxLeft>
      </PanelLeft>
    )
  }

  const ContentSection = ({
    id,
    content,
  }: {
    id: string
    content: JSX.Element
  }) => {
    return (
      <PanelRight id={`${id}-right`}>
        <BoxRight id={`${id}-right-box`}>{content}</BoxRight>
      </PanelRight>
    )
  }

  const sections = [
    { id: 'sust', title: 'Sustentabilidad', content: <Sustentabilidad /> },
    { id: 'dis', title: 'Diseño', content: <Diseño /> },
    { id: 'inn', title: 'Innovación', content: <Innovación /> },
  ]

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sections.forEach(({ id }) => {
        /*      gsap.set(`#${id}-panel`, { autoAlpha: 0 }) */
        gsap.set(`#${id}-box`, { autoAlpha: 0 })
        gsap.set(`#${id}-right-box`, { autoAlpha: 0 })
      })
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

      const tl0 = gsap.timeline()
      const tl1 = gsap.timeline({ paused: true })
      const tl2 = gsap.timeline()
      tl0.to('.about-inner', {
        scrollTrigger: {
          trigger: '.about-inner',
          start: 'center center+=10',
          endTrigger: '.about-content',
          end: 'bottom center',
          scrub: true,
          markers: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            tl1.play()
          },
        },
      })

      tl1
        .to('#top-border', {
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

      sections.forEach(({ id }) => {
        tl2.scrollEffect({}, { parent: `#${id}-panel`, box: `#${id}-box` })
        tl2.scrollEffect(
          {},
          { parent: `#${id}-right`, box: `#${id}-right-box` },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Container ref={ContainerRef} className="about-content">
      <Inner className="about-inner">
        <TopBorder id="top-border" />
        <BottomBorder id="bottom-border" />
        <LeftBorder id="left-border" />
        <RightBorder id="right-border" />
      </Inner>
      <LeftContent>
        {sections.map(({ id, title, content }) => (
          <Section key={id} id={id} title={title} content={content} />
        ))}
      </LeftContent>
      <RightContent>
        {sections.map(({ id, content }) => (
          <ContentSection key={id} id={id} content={content} />
        ))}
      </RightContent>
    </Container>
  )
}

export default About
