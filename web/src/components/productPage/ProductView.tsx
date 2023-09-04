import Gallery from './Gallery'
import ProdInfo from './productInfo/ProdInfo'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  height: 110vh;
  width: 100%;
  margin: 0 1vw 0 1vw;
  padding: 15vh 4vw 1.3vw 4vw;
  display: flex;
  flex-direction: row;
  gap: 4vw;
`

const ProductView = ({ product }) => {
  return (
    <Container className="product-container">
      <Gallery product={product} />
      <ProdInfo product={product} />
    </Container>
  )
}

export default ProductView
