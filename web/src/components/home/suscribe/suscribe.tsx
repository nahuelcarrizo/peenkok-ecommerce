import {
  Container,
  Content,
  FormContainer,
  ImgContainer,
  LinkSocial,
  StyledButton,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledText,
  SuscribeContainer,
} from './suscribe.styles'

import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Suscribe = ({ suscribe }: any) => {
  const { image } = suscribe

  const handleSubmit = e => {
    e.preventDefault()
    // Lógica para enviar los datos del formulario
  }

  return (
    <Container>
      <ImgContainer>
        <StyledImage
          asset={image.asset}
          image={image}
          alt="suscribe-image"
          width={947}
          height={925}
        />
        <LinkSocial>@PEENKOK.ES</LinkSocial>
      </ImgContainer>
      <SuscribeContainer>
        <Content>
          <StyledText>
            JOIN US
            <br />
            FOR DEALS & TO HELP
            <br /> OUR PLANET
          </StyledText>
          <StyledForm>
            <StyledInput type="text" placeholder="EMAIL" />
            <StyledButton>OK</StyledButton>
          </StyledForm>
        </Content>
      </SuscribeContainer>
    </Container>
  )
}

export default Suscribe
