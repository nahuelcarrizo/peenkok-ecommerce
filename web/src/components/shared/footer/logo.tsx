import React, { useEffect, useRef } from 'react'

import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    relative
 

  `};
  margin-top: 2rem;
`

const LogoSVG = styled.img`
  ${tw`
    m-0
  `};
  width: 35rem;
`

const Logo = () => {
  return (
    <LogoContainer>
      <LogoSVG src="/assets/LogoPeenkok_black.svg" alt="Logo" />
    </LogoContainer>
  )
}

export default Logo
