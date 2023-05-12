import { Container } from '../shared/sharedstyles'
import React from 'react'
import RemoteFixedSizeImage from './image-types/remote-fixed-size-image'
import styled from 'styled-components'
import tw from 'twin.macro'

const SuscribeContainer = styled.div`
  color: white;
  height: 450px;
  position: relative;
  margin: 1rem;
`

const StyledImage = styled(RemoteFixedSizeImage)`
  ${tw`
      h-full
      w-full
      object-contain
  `};
`
const FormContainer = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  bottom: 0;
  margin: 2.5rem;
  overflow: hidden;
  padding: 1rem;
`

const StyledText = styled.p`
  ${tw`

    `}
  font-size: 2.5rem;
  font-family: 'Circular Std Black';
  color: white;
  line-height: 1;
  text-align: center;
`

const Suscribe = ({ suscribe }: any) => {
  const { image } = suscribe

  const handleSubmit = e => {
    e.preventDefault()
    // Lógica para enviar los datos del formulario
  }

  return (
    <SuscribeContainer>
      <FormContainer>
        <StyledText>
          Sección
          <br /> suscribe
        </StyledText>
      </FormContainer>
      <StyledImage asset={image.asset} image={image} alt="suscribe-image" />
    </SuscribeContainer>
  )
}

export default Suscribe
