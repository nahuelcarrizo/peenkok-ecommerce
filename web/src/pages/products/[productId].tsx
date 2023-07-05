import { Container } from '../../components/shared/sharedstyles'
import Layout from '../../components/shared/layout'
import Navbar from '../../components/shared/navbar/navbar'
import { NextPageContext } from 'next'
import ProductItemDisplay from '../../components/product-item/product-item'
import React from 'react'
import Slider from '../../components/shared/slider/collection1/slider'
import { sanity } from '../../../lib/sanity'
import styled from 'styled-components'
import tw from 'twin.macro'

const ProductItem = (/* { product, navbarItems, productId } */) => {
  return (
    <>
      {/*       <Container>
        <Navbar navbarItems={navbarItems} />
        <Layout>
          <ProductItemDisplay product={product} />
        </Layout>
      </Container> */}
    </>
  )
}

export default ProductItem

export const getServerSideProps = async (context: NextPageContext) => {
  const { productId } = context.query
  const product = await sanity.fetch(
    `
    *[_type == "product" && slug.current == "${productId}"][0].images[]{
      ...,
      "asset": asset-> {
        url,
        metadata}
    }
    `,
  )

  const navbarItems = sanity.fetch(`
        *[_type == "navbarItems"][0]
      `)

  const [productItem, navbarItemsResult] = await Promise.all([
    product,
    navbarItems,
  ])

  return {
    props: {
      product: productItem,
      navbarItems: navbarItemsResult,
      productId: productId,
    },
  }
}
