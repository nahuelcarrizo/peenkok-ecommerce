import React, { Ref, forwardRef, useEffect, useRef } from 'react'

import Cookies from '../shared/cookies'
import Footer from './footer/footer'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import SEO from '../../../next-seo.config'
import styled from 'styled-components'
import tw from 'twin.macro'

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

const Layout = forwardRef<HTMLElement, LayoutProps>(function Layout(
  { children }: LayoutProps,
  layoutRef,
) {
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
      <Main ref={layoutRef}>{children}</Main>
      <Cookies />
      <Footer />
    </>
  )
})

export default Layout
