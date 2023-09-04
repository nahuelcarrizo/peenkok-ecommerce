import styled from 'styled-components'

export const Container = styled.div`
  width: 45vw;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 13vh;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  font-family: 'Circular Std Bold';
  font-size: 1.3vw;
  gap: 2vh;
`

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  border-bottom: 1px solid black;
  padding-bottom: 1vh;
`

export const FilterTitle = styled.div`
  font-family: 'Circular Std Book';
  font-size: 1.1vw;
  cursor: pointer;
  padding-top: 1vh;
  padding-bottom: 1vh;
`

export const Category = styled.div`
  display: inline-flex;
  flex-direction: row;
  cursor: pointer;
  font-size: 1.4vw;
  font-family: 'Circular Std Bold';
  justify-content: space-between;
  width: 100%;
`
