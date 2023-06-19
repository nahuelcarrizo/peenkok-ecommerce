import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import About from '../components/home/about'
import { Container } from '../components/shared/sharedstyles'
import Hero from '../components/home/hero'
import Layout from '../components/shared/layout'
import Logo from '../components/shared/navbar/logoeditado'
import Navbar from '../components/shared/navbar/navbar'
import React from 'react'
import RemoteFixedSizeImage from '../components/shared/image-types/remote-fixed-size-image'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import Slider from '../components/shared/slider/slider'
import Stories from '../components/home/stories'
import Suscribe from '../components/shared/suscribe'
import gsap from 'gsap'
import { sanity } from '../../lib/sanity'
import styled from 'styled-components'
import tw from 'twin.macro'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const MainLogo = styled.div`
  /*   top: 30vw; */
  width: 92vw;
  height: 23vw;
  left: 4vw;
  top: 2.7vw;
  align-items: center;
  display: flex;
  /*   position: fixed; */
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
}) {
  const LogoRef = useRef(null)
  const NavLogFix = useRef(null)
  const NavRef = useRef(null)
  const [navBackground, setNavBackground] = useState('')
  const [adjustedY, setAdjustedY] = useState(0)

  useLayoutEffect(() => {
    const content = document.querySelector('#content')
    const viewport = document.querySelector('#viewport')
    const logoRef = LogoRef.current
    const navLogFix = NavLogFix.current

    const smoother = ScrollSmoother.create({
      wrapper: '#viewport',
      content: '#content',
      smooth: 1.5,
      effects: true,
    })

    smoother.effects('.add-lag', {
      lag: 0.1,
      speed: 1.1,
    })
    smoother.effects('.gs-parallax', {
      speed: 0.5,
    })
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({})

      tl.to(logoRef, {
        scale: 0.1,
        x: '-.7vw',
        y: '-0.7vw',
        duration: 1,
        ease: 'power4.easeInOut',
        scrollTrigger: {
          trigger: viewport,
          start: '10% top',
          end: '+=600',
          scrub: true,
          toggleActions: 'play restart play none',
          onEnter: () => {
            setNavBackground('true')
          },
          onEnterBack: () => {
            setNavBackground('false')
          },
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div id="viewport">
        <NavLog ref={NavLogFix}>
          <Navbar navbarItems={navbarItems} navbackground={navBackground} />
          <MainLogo id="LogoContainer" ref={LogoRef}>
            <FixedLogo isMenuOpen={false} id="fixedLogo" />
          </MainLogo>
        </NavLog>
        <div id="content">
          <Hero image={image} />
          <Layout>
            <Slider latestIncomes={latestIncomes} />
            <About about={about} />
            <Suscribe suscribe={suscribe} />
            <Slider collection={collection.collections1} />
            <Slider collection={collection.collections2} />
            <Stories heroVideo={heroVideo} />
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
