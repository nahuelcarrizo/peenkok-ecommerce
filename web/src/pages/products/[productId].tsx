import LatestSocial from '../../components/shared/feed'
import Layout from '../../components/shared/layout'
import Navbar from '../../components/shared/navbar/navbar'
import { NextPageContext } from 'next'
import ProductItemDisplay from '../../components/productPage/ProductView'
import ProductView from '../../components/productPage/ProductView'
import React from 'react'
import Recommended from '../../components/shared/recommended'
import Slider from '../../components/shared/slider/slider'
import { sanity } from '../../../lib/sanity'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`
    flex
    flex-col
    relative
    w-full
    h-full
/*     items-center */
  `};
`

const ProductPage = ({ product, productId, collection }) => {
  return (
    <Container>
      <ProductView product={product} />
      <Slider data={collection} />
      {/*       <LatestSocial /> */}
    </Container>
  )
}

export default ProductPage

export const getServerSideProps = async (context: NextPageContext) => {
  const { productId } = context.query

  const product = await sanity.fetch(
    `
    *[_type == "product" && _id == "${productId}"][0]{
      _id,
      name,
      ...,
      images[]{
        ...,
      "asset": asset -> {
        url, 
        metadata
      }
    }
    }`,
  )

  const collectionQuery = await sanity.fetch(`
  *[_type == "collection"][0]{
    "collection": *[name == "recommended"][0]{
      name,
      _id,
      searchName,
      description,
      "products": *[_type == "product" && _id in ^.products[]._ref]{
        _id,
        name,
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
  } 
     
 `)

  const [productItem] = await Promise.all([product])
  const [collection] = await Promise.all([collectionQuery])

  return {
    props: {
      product: productItem,
      productId: productId,
      collection,
    },
  }
}
