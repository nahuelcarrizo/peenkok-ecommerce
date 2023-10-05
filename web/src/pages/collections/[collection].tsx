
import { Header, ProductList } from '../../components/collections/index'
import { NextPageContext } from 'next'

import React from 'react'
import { sanity } from '../../../lib/sanity'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

export const Container = styled.div`
  margin: 6vh 0 0 0;
`

const CollectionPage = ({ collection }) => {
  useIsomorphicLayoutEffect(() => {}, [collection])
  return (
    <Container>
      <Header title={collection.name} />
      <ProductList products={collection.products} />
    </Container>
  )
}

export default CollectionPage

export const getServerSideProps = async (context: NextPageContext) => {
  const { collection } = context.query

  const query = await sanity.fetch(
    `*[_type == "collection" && name == "${collection}"][0]{
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
      }`,
  )

  const [Collection] = await Promise.all([query])

  return {
    props: {
      collection: Collection,
    },
  }
}
