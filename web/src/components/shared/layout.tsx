import React, { useState } from 'react'

import Cart from './cart/cart'
import Cookies from '../shared/cookies'
import Footer from './footer/footer'
import Head from 'next/head'
import Navbar from './navbar/navbar'
import { NextSeo } from 'next-seo'
import PageTransition from './transitions/pageTransition'
import { ReactNode } from 'react'
import SEO from '../../../next-seo.config'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { sanity } from '../../../lib/sanity'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'
import { useRouter } from 'next/router'

const Main = styled.main`
  ${tw`

        w-full
      h-full
    `};

  background-color: #fff;
`
type LayoutProps = {
  children: ReactNode | undefined
}

const Layout = ({ children }) => {
  const [isHome, setIsHome] = useState<boolean>(true)
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    if (router.pathname === '/onprogress') {
      setIsHome(false)
    } else {
      setIsHome(true)
    }
  }, [router])

  return (
    <>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={SEO.openGraph}
        twitter={SEO.twitter}
      />
      <Head>
        <title>Péenkok</title>
      </Head>
      <div
        id="smooth-wrapper"
        style={{ width: '100vw', height: '5000px !important' }}
      >
        {isHome && <Navbar />}
        {isHome && <Cart />}

        <div id="smooth-content" style={{ width: '100vw' }}>
          <Main> {children} </Main>
          {isHome && <Footer />}

          {/*    <Cookies /> */}
        </div>
        <PageTransition />
      </div>
    </>
  )
}

export default Layout
