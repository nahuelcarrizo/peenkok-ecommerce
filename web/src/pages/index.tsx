
import React from 'react'
import Slider from '../components/shared/slider/slider'

import { sanity } from '../../lib/sanity'
import { Hashtag, Hero, Stories, About, Suscribe } from '../components/home/index'

const Home = ({
  homeSettings: {
    heroVideo,
    heroImages: image,
    latest,
    about,
    suscribe,
    collection1,
    collection2,
    collection3,
    collections,
  },
}: {
  homeSettings: any
}) => {
  
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Hero image={image} />
      <Slider data={collection1} />
      {/* <About about={about} /> */}
      <Suscribe suscribe={suscribe} />
      <Slider data={collection2} />
      <Stories heroVideo={heroVideo} />
      <Hashtag />
    </div>
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
        "asset": image.asset -> {
          url, 
          metadata
        }
      },
      storiesVideo {
        "asset": asset -> {
          url, 
          metadata
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
      },
      collection1{
        "collection": *[_type == "collection" && _id == ^._ref][0]{
          name,
          searchName,
          description,
          "products": *[_type == "product" && _id in ^.products[]._ref]{
            _id,
            name,
            slug,
            images[]{
              "asset": image.asset -> {
                url,
                metadata
              }
            },
            ...,
            "asset": image.asset -> {
              url,
              metadata
            }
          }
        }
      },
      collection2{
        "collection": *[_type == "collection" && _id == ^._ref][0]{
          name,
          searchName,
          description,
          "products": *[_type == "product" && _id in ^.products[]._ref]{
            _id,
            name,
            slug,
            images[]{
              "asset": image.asset -> {
                url,
                metadata
              }
            },
            ...,
            "asset": image.asset -> {
              url,
              metadata
            }
          }
        }
      },
      collection3{
        "collection": *[_type == "collection" && _id == ^._ref][0]{
          name,
          searchName,
          description,
          "products": *[_type == "product" && _id in ^.products[]._ref]{
            _id,
            name,
            slug,
            images[]{
              asset -> {
                url,
                metadata
              }
            },
            ...,
            "asset": asset -> {
              url,
              metadata
            }
          }
        }
      },
      collections{
        "collection": *[_type == "collection"]{
          ...,
        }
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
