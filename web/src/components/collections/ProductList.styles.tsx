import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  height: 100%;
`

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 67vw;
  height: 100%;
  border-left: 1px solid black;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 3vh;
  /*  border-bottom: 1px solid black; */
  border-top: 1px solid black;
`
