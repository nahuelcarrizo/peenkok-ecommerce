import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Cookies from '../shared/cookies'
import Footer from './footer/footer'
import Head from 'next/head'
import HomeTransition from './transitions/HomeTransition'
import Navbar from './navbar/navbar'
import { NextSeo } from 'next-seo'
import PageTransition from './transitions/pageTransition'
import { ReactNode } from 'react'
import SEO from '../../../next-seo.config'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'
import { useRouter } from 'next/router'
import { useAnimationContext } from '../../context/AnimationContext'
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


// function renderNavbar(currentPage) {
//   switch (currentPage) {
//     case '/checkout':
//       return (
//         <></>
//       )
//     case '/payment':
//       return (
//         <></>
//       )
//     default:
//       return (
//         <Navbar />
//       )
//   }
// }

// function renderFooter(currentPage) {
//   switch (currentPage) {
//     case '/checkout':
//       return (
//         <></>
//       )
//     case '/payment':
//       return (
//         <></>
//       )
//     default:
//       return (
//         <Footer />
//       )
//   }
// }

function renderNavbar(currentPage) {
  switch (currentPage) {
    case '/checkout':
    case '/payment':
    case '/success':
      return null;
    default:
      return <Navbar />;
  }
}

function renderFooter(currentPage) {
  switch (currentPage) {
    case '/checkout':
    case '/payment':
    case '/success':
      return null;
    default:
      return <Footer />;
  }
}

function renderHomeTransition(currentPage) {
  switch (currentPage) {
    case '/':
      return <HomeTransition />;
    default:
      return null;
  }
}
function renderPageTransition(currentPage) {
  switch (currentPage) {
    case '/':
    case '/payment':
      return null;
    default:
      return <PageTransition />
  }
}


const Layout = ({ children }) => {
  const [isHome, setIsHome] = useState<boolean>(null)
  const [isCheckoutPage, setIsCheckoutPage] = useState<boolean>(null)
  const [currentPage, setCurrentPage] = useState('/')
  const router = useRouter()
  const { animationCompleted, animationStatus } = useAnimationContext()

  useIsomorphicLayoutEffect(() => {
    if (router.pathname === '/') {
      setIsHome(true)
    } else {
      setIsHome(false)
      animationStatus(true)

    }
    const current = router.pathname
    setCurrentPage(current)
    console.log("currentPage: " + currentPage)
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
        {animationCompleted && renderNavbar(currentPage)}


        <div id="smooth-content" style={{ width: '100vw' }}>
          {/* {animationCompleted && <Main>{children}</Main>}  */}

          {animationCompleted && <>
            <Main>{children}</Main>
            {renderFooter(currentPage)}
          </>}


          {/*    <Cookies /> */}
        </div>
        {/* {isHome && <HomeTransition />}
        {isHome === false && <PageTransition />} */}
        {renderHomeTransition(currentPage)}
        {renderPageTransition(currentPage)}
      </div>
    </>
  )
}

export default Layout;
