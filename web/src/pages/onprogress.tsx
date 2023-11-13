import tw, { styled } from 'twin.macro'

import { FaTools } from 'react-icons/fa'
import Link from 'next/link'
import Logo from '../components/shared/navbar/logo'
import React from 'react'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '../hooks/isomorphicEffect'

// Estilos usando twin.macro
const PageContainer = styled.div`
  ${tw`h-screen flex flex-col justify-center items-center`}
`

const UnderConstructionIcon = styled(FaTools)`
  ${tw`text-4xl mb-4`}
`

const Message = styled.p`
  ${tw`text-xl font-semibold`}
  margin-left: -3px;
`
const LogoContainer = styled.div`
  width: 20vw;
  height: 10vh;
  margin-bottom: 0.2rem;
  /*   overflow: visible; */
`
const StyledLink = styled(Link)`
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 1.5rem;

  color: black;
  font-family: 'Circular Std Medium';
`

const ConstruccionPage = () => {
  return (
    <PageContainer>
      <StyledLink href="/">Back</StyledLink>
      <LogoContainer className="logo-edit">
        <Logo fill={'#F36600'} />
      </LogoContainer>
      <Message>¡On progress!</Message>
    </PageContainer>
  )
}

export default ConstruccionPage
