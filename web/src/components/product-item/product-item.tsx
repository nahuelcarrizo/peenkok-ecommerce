import React, { useEffect } from 'react'

import { Container } from '../shared/sharedstyles'
import ProductItemSlider from './product-item-slider'
import styled from 'styled-components'
import tw from 'twin.macro'

const ProductGallery = styled.div`
  height: 38.3rem;
`
const ProductInfo = styled.div`
  height: 250px;
`

const StyledContainer = styled(Container)`
  margin-top: 3.3rem;
`

const ProductItemDisplay = ({ product }) => {
  return (
    <StyledContainer>
      <ProductGallery>
        <ProductItemSlider product={product} />
      </ProductGallery>
      <ProductInfo>Product info</ProductInfo>
    </StyledContainer>
  )
}

export default ProductItemDisplay
