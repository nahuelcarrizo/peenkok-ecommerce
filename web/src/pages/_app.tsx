import '../config/fonts.css'
import '../../src/components/shared/slider/card/banner.css'

import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/shared/layout'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '../hooks/isomorphicEffect'
import { StateContext } from '../context/StateContext'
import { AnimationProvider } from '../context/AnimationContext'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

function MyApp({ Component, pageProps }: AppProps) {
  const smoother = useRef<ScrollSmoother | null>(null)
  const router = useRouter()
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 1,
        speed: 0.5,
        effects: true,
        normalizeScroll: true,
        /*    ignoreMobileResize: true,
        preventDefault: true, */
      })

      smoother.current?.effects('.add-lag', {
        lag: 0.1,
        speed: 1.1,
      })
      smoother.current?.effects('.gs-parallax', {
        speed: 0.5,
      })
    })
    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <>
      <StateContext>
        <AnimationProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </AnimationProvider>
      </StateContext>
    </>
  )
}

export default MyApp
