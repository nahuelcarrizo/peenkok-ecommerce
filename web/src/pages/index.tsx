import About from '../components/home/about'
import Hashtag from '../components/home/hashtag'
import Hero from '../components/home/hero'
import React from 'react'
import Slider from '../components/shared/slider/slider'
import Stories from '../components/home/stories'
import Suscribe from '../components/shared/suscribe'
import { sanity } from '../../lib/sanity'

const Home = ({
  homeSettings: {
    heroVideo,
    heroImages: image,
    latest,
    about,
    suscribe,
    collection1,
    collection2,
  },
}: {
  homeSettings: any
}) => {
  /*   console.log('latest: ' + JSON.stringify(latest, null, 2))
  console.log('colleccion 1: ' + JSON.stringify(collection1, null, 2))
  console.log('collection 2: ' + JSON.stringify(collection2, null, 2)) */
  return (
    <>
      <Hero image={image} />
      <Slider data={latest} />
      <About about={about} />
      <Suscribe suscribe={suscribe} />
      {/*       <Slider data={latest} />
      <Slider data={latest} /> */}
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
      latest{
        "collection": *[_type == "collection" && _id == ^._ref][0]{
          name,
          searchName,
          description,
          "products": *[_type == "product" && references(^._id)]{
            _id,
            name,
            images[]{
            ...,
            "asset": asset -> {
              url,
              metadata
            }
          }
          }
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
          "products": *[_type == "product" && references(^._id)]{
            _id,
            name,
            images[],
            ...,
            "asset": asset -> {
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
          "products": *[_type == "product" && references(^._id)]{
            _id,
            name,
            images[],
            ...,
            "asset": asset -> {
              url,
              metadata
            }
          }
        }
      },
    }
  `)

  const [homeSettingsResult] = await Promise.all([homeSettings])

  return {
    props: {
      homeSettings: homeSettingsResult,
    },
  }
}
