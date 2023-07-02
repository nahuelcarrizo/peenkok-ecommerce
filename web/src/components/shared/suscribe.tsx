import { Container } from '../shared/sharedstyles'
import React from 'react'
import RemoteFixedSizeImage from './image-types/remote-fixed-size-image'
import styled from 'styled-components'
import tw from 'twin.macro'

const SuscribeContainer = styled.div`
  color: white;
  margin: 2.7vw;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const StyledImage = styled(RemoteFixedSizeImage)`
  ${tw`
      h-full
      w-full
      object-cover
  `};
  top: 50%;
`
const FormContainer = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 30vw;
  width: 100%;
`

const StyledText = styled.p`
  ${tw`

    `}
  font-size: 2.5rem;
  font-family: 'Circular Std Black';
  color: white;
  line-height: 1;
  text-align: center;
  position: absolute;
  bottom: 10px;
`

const Suscribe = ({ suscribe }: any) => {
  const { image } = suscribe

  const handleSubmit = e => {
    e.preventDefault()
    // Lógica para enviar los datos del formulario
  }

  return (
    <SuscribeContainer>
      <FormContainer id="nahuelc">
        <StyledImage
          asset={image.asset}
          image={image}
          alt="suscribe-image"
          width={1210}
          height={700}
        />
        <StyledText>
          Sección
          <br /> suscribe
        </StyledText>
      </FormContainer>
    </SuscribeContainer>
  )
}

export default Suscribe
