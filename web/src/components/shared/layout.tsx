import { useEffect, useRef } from 'react'

import Cookies from '../shared/cookies'
import Footer from './footer/footer'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import SEO from '../../../next-seo.config'
import styled from 'styled-components'
import tw from 'twin.macro'

// importar modelo de categoria, footer, navbar, colores

const Main = styled.main`
  ${tw`
        flex    
        flex-col
        h-full
        w-full
        relative
    `};
  overscroll-behavior: none;
  background-color: #fdfbf5;
`

type LayoutProps = {
  children: ReactNode | undefined
}

const Layout = ({ children }: LayoutProps) => {
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
      <Main>{children}</Main>
      <Cookies />
      <Footer />
    </>
  )
}

export default Layout
