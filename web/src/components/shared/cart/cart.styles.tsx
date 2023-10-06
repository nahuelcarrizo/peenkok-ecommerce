import styled from "styled-components";
import RemoteFixedSizeImage from "../image-types/remote-fixed-size-image";

export const Image = styled(RemoteFixedSizeImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

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
  padding: 1vw 2vw;
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

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  height: 100%;
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