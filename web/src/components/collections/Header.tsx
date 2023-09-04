import React, { useState } from 'react'

import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect'

const Container = styled.div`
  height: 20vh;
  width: 100vw;
  /*   margin-left: 0.8vw; */
  display: flex;
  justify-content: center;
`
const H1 = styled.h1`
  font-family: 'Oswald';
  font-size: 7vw;
  letter-spacing: 1px;
`
const Header = ({ title }) => {
  const [collection, setCollection] = useState('')
  useIsomorphicLayoutEffect(() => {
    setCollection(title)
  }, [title])
  return (
    <Container>
      <H1>{title.toUpperCase()}</H1>
    </Container>
  )
}

export default Header
