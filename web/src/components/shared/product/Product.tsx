import { Container, Info, Price, ProductName } from './Product.styles'

import Media from './media/Media'
import React from 'react'
import { useRouter } from 'next/router'

const Product = ({ images, name, price, id, customFields }) => {
  return (
    <Container href={`products/${id}`}>
      <Media images={images} title={id} />
      <Info>
        <ProductName>{name}</ProductName>
        <Price>€ {price}</Price>
      </Info>
    </Container>
  )
}

export default Product
