import About from '../components/home/about'
import { Container } from '../components/shared/sharedstyles'
import Hero from '../components/home/hero'
import Layout from '../components/shared/layout'
import Navbar from '../components/shared/navbar/navbar'
import React from 'react'
import Slider from '../components/shared/slider/slider'
import Stories from '../components/home/stories'
import Suscribe from '../components/shared/suscribe'
import { sanity } from '../../lib/sanity'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledDiv = tw.div`
  w-screen
  h-screen    
`

export default function Home({
  homeSettings: {
    heroVideo,
    heroImages,
    latestIncomes,
    storiesVideo,
    collection,
    about,
    suscribe,
  },
  navbarItems,
}) {
  return (
    <>
      <Container>
        <Navbar navbarItems={navbarItems} isHome={true} />
        <Layout>
          <Hero heroImages={heroImages} />
          <Slider latestIncomes={latestIncomes} />
          <Stories heroVideo={heroVideo} />
          <Slider collection={collection.collections1} />
          <Slider collection={collection.collections2} />
          <About about={about} />
          <Suscribe suscribe={suscribe} />
        </Layout>
      </Container>
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
