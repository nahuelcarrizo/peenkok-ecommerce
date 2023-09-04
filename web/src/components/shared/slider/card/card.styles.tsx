import RemoteFixedSizeImage from '../../image-types/remote-fixed-size-image'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overscroll-behavior: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
export const StyledImg = styled(RemoteFixedSizeImage)`
  /*   width: 32rem; */
  height: 100%;

  will-change: transform;
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;

  transform: scale(0.8);
`
