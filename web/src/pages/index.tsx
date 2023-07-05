import { Slider1, Slider2, Slider3 } from '../components/shared/slider'

import About from '../components/home/about'
import Hashtag from '../components/home/hashtag'
import Hero from '../components/home/hero'
import React from 'react'
import Stories from '../components/home/stories'
import Suscribe from '../components/shared/suscribe'
import { sanity } from '../../lib/sanity'

const Home = ({
  homeSettings: {
    heroVideo,
    heroImages: image,
    latestIncomes,
    collection,
    about,
    suscribe,
  },
}: {
  homeSettings: any
}) => {
  return (
    <>
      <Hero image={image} />
      <Slider1 latestIncomes={latestIncomes} />
      {/* <About about={about} /> */}
      <Suscribe suscribe={suscribe} />
      <Slider2 collection={collection} />
      {/*   <Slider3 collection={collection} /> */}
      <Stories heroVideo={heroVideo} />
      <Hashtag />
    </>
  )
}

export default Home

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

  const [homeSettingsResult] = await Promise.all([homeSettings])

  return {
    props: {
      homeSettings: homeSettingsResult,
    },
  }
}
