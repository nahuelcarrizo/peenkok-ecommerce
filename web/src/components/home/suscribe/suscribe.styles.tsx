import RemoteFixedSizeImage from '../../shared/image-types/remote-fixed-size-image'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  color: white;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid black;
`
export const StyledInput = styled.input`
  ${tw`w-full h-full`}
  outline: none;
  font-size: 1rem;
  text-transform: uppercase;

  ::placeholder {
    font-size: 0.9vw;
    color: #444444;
    font-family: 'Circular Std Medium';
  }
`

export const SuscribeContainer = styled.div`
  ${tw`flex flex-col justify-center items-center w-full `}
  width: 100%;
  margin-left: 1.3vw;
`
export const FormContainer = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 60vw;
  width: 100%;
`
export const StyledImage = styled(RemoteFixedSizeImage)`
  ${tw`
      h-full
      w-full
      object-cover
  `};
  top: 0;
`

export const Content = styled.div`
  /*   width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   top: 23vh; */
`

export const StyledText = styled.p`
  ${tw`
    [font-size: 4.1vw]
    [font-family: 'Circular Std Bold']
    [line-height: 4.8rem]
    [letter-spacing: -0.5px]
    flex
    text-center
  `}
  color: black;
`
export const StyledButton = styled.button`
  ${tw`h-full`}
  width: 15%;
  font-size: 0.9vw;
`
export const StyledForm = styled.form`
  ${tw`flex flex-row`}
  /*   margin-top: 6vw; */
  width: 40%;
  /*   margin-left: 0.5vw; */
  height: 1.4vw;
  margin-top: 5vh;
  /*   padding-top: 1.5vw; */
  color: #444444;
  border-bottom: 2px solid #444444;
  font-family: 'Circular Std Bold';
`
export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`
