import React, { useEffect, useRef } from 'react'

import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

const LogoContainer = styled(Link)`
  ${tw`
    flex
    items-center
    justify-center
    relative
    pb-2
  `};
`

const LogoSVG = styled.img`
  ${tw`
    m-0
    z-10
    
  `};
  min-width: 93.5px;
  min-height: 23.6px;
`

const Logo = () => {
  return (
    <LogoContainer href="/" passHref>
      <LogoSVG src="/assets/peenkokLogo.svg" alt="Logo" />
    </LogoContainer>
  )
}

export default Logo
