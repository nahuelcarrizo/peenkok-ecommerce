import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const RightContent = styled.div`
  width: 100%;
  margin-top: 80vh;
  width: 35vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 50vh;
  margin-right: 15vw;
`
export const LeftContent = styled.div`
  width: 35vw;
  margin-top: 40vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 50vh;

  margin-left: 15vw;
`
const Panel = styled.div`
  height: 40vh;
  width: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const PanelLeft = styled(Panel)`
  justify-content: center;
`
export const PanelRight = styled(Panel)`
  justify-content: center;
`

const Box = styled.div`
  height: 20vh;
  top: 2vh;
  vertical-align: middle;
  align-items: center;
  position: relative;
  display: flex;
  text-align: center;

  justify-content: center;
  display: flex;
  font-family: 'Circular Std Black';
`

export const BoxLeft = styled(Box)`
  justify-content: flex-end;
  font-size: 3vw;
`

export const BoxRight = styled(Box)`
  justify-content: flex-start;
  font-size: 2.1vw;
  max-width: 30vw;
  margin-left: 2vw;
`

export const H2 = styled.h2`
  font-size: 3vw;
  font-family: 'Circular Std Black';
`

export const Inner = styled.div`
  height: 80vh;
  width: 70vw;
  position: absolute;

  top: 10vh;
`
export const TopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /*   width: 100%; */
  height: 1px;
  background-color: black;
  transform-origin: top left;
`
export const BottomBorder = styled.div`
  position: absolute;
  bottom: 0;

  right: 0;
  /*   width: 100%; */
  height: 1px;
  background-color: black;
  transform-origin: bottom right;
`
export const LeftBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0.5px;
  background-color: black;
  transform-origin: bottom;
  /*   height: 100%; */
`
export const RightBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.6px;
  background-color: black;
  /* height: 100%; */
  transform-origin: top;
`
