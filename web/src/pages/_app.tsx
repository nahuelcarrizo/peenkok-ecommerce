import '../config/fonts.css'
import '../../src/components/shared/slider/card/banner.css'

import React, { useRef, useState } from 'react'

import type { AppProps } from 'next/app'
import { CartProvider } from '../context'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/shared/layout'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '../hooks/isomorphicEffect'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

function MyApp({ Component, pageProps }: AppProps) {
  const smoother = useRef<ScrollSmoother | null>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 0.2,
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
      <CartProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  )
}

export default MyApp
