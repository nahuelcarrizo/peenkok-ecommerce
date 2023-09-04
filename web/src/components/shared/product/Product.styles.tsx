import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  will-change: transform;
  position: relative;
  padding: 1.8vw 1.8vw 0 1.8vw;
  border-left: 1px solid #191919;
  border-right: 1px solid #191919;
  border-bottom: 1px solid black;
  /*   &:nth-last-of-type(1),
  &:nth-last-of-type(2) {
    border-bottom: none;
  } */
  /*   &:nth-child(1),
  &:nth-child(2) {
    border-top: 1px solid black;
  } */
  z-index: 10;
  border-left: none;
`

export const Info = styled.div`
  ${tw`
      flex
      flex-col
      [font-size: 0.8rem]
      justify-center
  `}
  letter-spacing: -.5px;
  padding: 0.5rem 0;
`

export const ProductName = styled.div`
  font-family: 'Circular Std Black';
  font-size: 2vw;
  height: 100%;
`

export const Price = styled.div`
  font-family: 'Circular Std Book';
  font-size: 1.5rem;
`
