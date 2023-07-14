import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  margin-top: 20vh;
  position: relative;
  z-index: 1;
`
const StyledH2 = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 7vw;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-family: 'Circular Std Medium';
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
`
const StyledHashtag = styled.div`
  color: white;
  transform: translate(0, -1.5vw) rotate(1.42deg);

  background-color: black;
  padding: 0.5rem 1rem;
  font-size: 5vw;
  font-family: 'Circular Std Black';
  letter-spacing: -1px;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  overflow-block: hidden !important;
  z-index: 1;
`

export default function Hashtag() {
  return (
    <div>
      <Container>
        <StyledH2>
          LET'S
          <StyledHashtag>#SAVETHEPLANET</StyledHashtag>
        </StyledH2>
      </Container>
    </div>
  )
}
