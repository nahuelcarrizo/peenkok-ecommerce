import styled from "styled-components";
import RemoteFixedSizeImage from "../image-types/remote-fixed-size-image";
import Link from "next/link";



export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 40%;
  position: absolute;
  top: 0;
  background-color: white;
  overflow: hidden;
  right: 0;
  z-index: 200;
  will-change: transform;
  border: 1px solid black;
`
export const Content = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vw 2vw 3vw 2vw;
`
export const Title = styled.div`
  font-family: 'Circular Std Black';
  font-size: 2vw;
  width: 100%;
`
export const CloseButton = styled.button`
  font-family: 'Circular Std Medium';
  font-size: 1vw;
  align-self: flex-start;
`

export const ItemsContainer = styled.ul`
  display: flex;
  padding-top: 1vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  height: 100%;
  color: black;
  gap: 1vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 10px; /* Ancho de la barra de desplazamiento */
  }
  
`

export const HeaderBag = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vh;
  align-items: flex-start;
`
export const CartFader = styled.div`
  position: fixed;
  visibility: hidden;
  background-color: #000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`

export const ItemView = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding-bottom: 1.3vh;
  :not(:first-child) {
    border-top: 1px solid black;
    padding-top: 1vh;
  }
` 

export const StyledLink = styled(Link)`
  z-index: 10;
  padding: 0 1rem 0 0;
`

export const Image = styled(RemoteFixedSizeImage)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border: 1px solid black;
  `

export const ItemInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Circular Std Bold';
  align-items: flex-start;
 
`
export const ItemName = styled.h4`
font-size: 1.4vw;`
export const ItemCustomfield = styled.h3`
font-size: 1vw;
padding-top: 0.5vh;`
export const ItemPrice = styled.h3`
font-size: 1.1vw;
bottom: 0;
left:0;
position: absolute;
font-family: 'Circular Std Book';`
export const ItemButtons = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;`

export const ItemQty = styled.div`
display: flex;  
flex-direction: row;
border-radius: 50px;
gap: 1vw;
padding: 0.4vh 0.5vw;
border: 1px solid black;
align-self: end;
`

export const TrashButton = styled.button`
position: absolute;
top:0;
right:0;
`

export const CheckOut = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const PayButton = styled.div`
margin: 1vw 0.5vw;
align-items: center;
justify-content: center;
display: flex;`

export const Button = styled(Link)`
font-family: 'Circular Std Medium';
font-size: 1.3vw;
border: 1px solid black;
border-radius: 50px;
padding: 0.5vw 4vw;
:hover {
  background-color: #000;
  color: white;
}`

export const SubTotal = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
font-family: 'Circular Std Medium';
font-size: 1.2vw;
border-top: 1px solid black;
border-bottom: 1px solid black;
padding: 1vw 0;`
