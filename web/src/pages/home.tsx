import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import About from '../components/home/about'
import Cart from '../components/shared/cart/cart'
import Collection1 from '../components/shared/Slider/collection1/slider'
import Collection2 from '../components/shared/Slider/collection2/slider'
import Collection3 from '../components/shared/Slider/collection3/slider'
import Hashtag from '../components/home/hashtag'
import Hero from '../components/home/hero'
import Layout from '../components/shared/layout'
import Logo from '../components/shared/navbar/logoeditado'
import Navbar from '../components/shared/navbar/navbar'
import React from 'react'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Stories from '../components/home/stories'
import Suscribe from '../components/shared/suscribe'
import gsap from 'gsap'
import { sanity } from '../../lib/sanity'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../hooks/isomorphicEffect'

gsap.registerPlugin(ScrollToPlugin)

const MainLogo = styled.div`
  width: 100vw;
  height: 23vw;
  top: 2.7vw;
  align-items: center;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 7;
  /*   transition: transform 0.7s cubic-bezier(0.16, 1.08, 0.38, 0.98); */
  will-change: transform;
  transform-origin: left top;
`

const FixedLogo = styled(Logo)`
  /*  height: 30px; */
  position: fixed;
`

const NavLog = styled.div`
  ${tw`
absolute
  h-full
 [width: 100vw]
  `}
`

export default function Home({
  homeSettings: {
    heroVideo,
    heroImages: image,
    latestIncomes,
    storiesVideo,
    collection,
    about,
    suscribe,
  },
  navbarItems,
}: {
  homeSettings: any
  navbarItems: any
}) {
  const LogoRef = useRef(null)
  const mainRef = useRef(null)
  const contentRef = useRef(null)
  const bottomRowRef = useRef(null)
  const HeroRef = useRef(null)
  const layoutRef = useRef(null)
  const timeline = useRef(null)

  gsap.registerEffect({
    name: 'scrollTo',
    effect: (target, config) => {
      return gsap.to(target, {
        scrollTo: {
          y: config / 2.2,
          autoKill: false,
        },
        duration: 0.8,
      })
    },
  })
  gsap.registerEffect({
    name: 'navbarHeight',
    effect: (targets, config) => {
      targets.forEach(el => {
        return gsap.to(el, {
          y: config.y,
          duration: 0.1,
          ease: 'back.easeInOut',
        })
      })
    },
  })
  /* 
  gsap.registerEffect({
    name: 'scaleHero',
    effect: (target, config, heroImage) => {
      return gsap.to(target, {
        scaleX: config,
        ease: 'power4.easeInOut',
        scrollTrigger: {
          scrub: 1,
          start: 'top top',
          end: 300,
          trigger: target,
          toggleActions: 'play none reverse none',
        },
      })
    },
  })
   */
  function middle(target, config, heroImage) {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: 'top top',
        end: 200,
        trigger: target,
        toggleActions: 'play none reverse none',
      },
      ease: 'power4.easeInOut',
    })

    tl.to(target, {
      scale: config,
    })
    tl.to(
      heroImage,
      {
        scale: 1.07,
        /*         delay: 0.5, */
      },
      '<',
    )
    return tl
  }

  function intro() {
    const tl = gsap.timeline()
    tl.to(LogoRef.current, {
      scale: 0.085,
      x: '3.53vw',
      y: '-1.98vh',
      ease: 'power4.easeInOut',
    })

    ScrollTrigger.create({
      trigger: HeroRef.current,
      start: 'top top',
      pin: HeroRef.current,
      pinType: 'transform',
      end: 300,
      scrub: 1,
      toggleActions: 'play none reverse none',
      animation: tl,
      onUpdate: self => {
        if (self.progress > 0.9 && self.direction === 1) {
          /*           gsap.effects.scaleHero(HeroRef.current, 0.925, heroImage) */
          /*           gsap.effects.scrollTo(window, layoutRef.current.offsetTop) */
        }
      },
    })

    return tl
  }

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroImage = document.querySelector('.hero-image')
      console.log('hero' + heroImage)
      const master = gsap.timeline()

      master.add(intro())
      master.add(middle(HeroRef.current, 0.925, heroImage))

      ScrollTrigger.create({})

      ScrollTrigger.refresh()
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div
        id="smooth-wrapper"
        style={{ width: '100vw', height: '5000px !important' }}
      >
        <NavLog>
          <Navbar navbarItems={navbarItems} ref={bottomRowRef} />
          <MainLogo id="LogoContainer" ref={LogoRef}>
            <FixedLogo />
          </MainLogo>
        </NavLog>
        <Cart />
        <div id="smooth-content" ref={contentRef} style={{ width: '100vw' }}>
          <Hero image={image} ref={HeroRef} />
          <Layout ref={layoutRef}>
            <Collection1 latestIncomes={latestIncomes} />
            <About about={about} />
            <Suscribe suscribe={suscribe} />
            <Collection2 collection={collection} />
            <Collection3 collection={collection} />
            <Stories heroVideo={heroVideo} />
            <Hashtag />
          </Layout>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const homeSettings = await sanity.fetch(`
    *[_type == "homeSettings"][0]{
      homePageTitle,
      heroVideo {
        "asset": asset-> {
          url,
          metadata
        }
      },
      heroImages[]{
        "image": {
          ...,
        },
        "asset": asset -> {
          url, 
          metadata
        }
      },
      latestIncomes {
        latestIncomesText,
        latestIncomesMedia[]{
          "image": {
            ...,
          },
          "asset": asset -> {
            url, 
            metadata
          }
        }
      },
      storiesVideo {
        "asset": asset -> {
          url, 
          metadata
        }
      },
      collection {
        collections1 {
          collection1Text,
          collection1Media[]{
            "image": {
              ...,
            },
            "asset": asset -> {
              url, 
              metadata
            }
          }
        },
        collections2 {
          collection2Text,
          collection2Media[]{
            "image": {
              ...,
            },
            "asset": asset -> {
              url, 
              metadata
            }
          }
        }
      },
      about {
        text,
        video {
          ...,
          "asset": asset -> {
            url, 
            metadata
          }
        }
      },
      suscribe {
        text,
        image {
          ...,
          "asset": asset -> {
            url, 
            metadata
          }
        },
      }
    }
  `)

  const navbarItems = sanity.fetch(`
        *[_type == "navbarItems"][0]
      `)

  const [homeSettingsResult, navbarItemsResult] = await Promise.all([
    homeSettings,
    navbarItems,
  ])

  return {
    props: {
      homeSettings: homeSettingsResult,
      navbarItems: navbarItemsResult,
    },
  }
}
