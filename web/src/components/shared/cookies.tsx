import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

interface CookiesWrapperProps {
  visible?: boolean
}

const CookiesWrapper = styled.div<CookiesWrapperProps>`
  display: ${props => (props.visible ? 'flex' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  bottom: 0;
  padding: 1.2rem 0;
  position: fixed;
  width: 100vw;
  z-index: 10;
  display: flex;
  background: #fdfbf5;
`

const CookiesHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
`

const CookiesText = styled.div`
  font-family: 'Circular Std Book';
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.5;
`

const StyledLink = styled.a`
  &.underline {
    text-decoration: underline;
  }
`

const CookiesBtns = styled.div`
  display: flex;
  margin: 20px 0 0;
  gap: 15px;
  font-family: 'Circular Std Book';
`

const StyledButton = styled.button`
  height: 2.5rem;
  font-size: 1.1rem;
  border: 1px solid black;
  border-radius: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 8rem;
  &.btn-hover {
    /* Estilos de hover para el botón */
  }
`

const Cookies = () => {
  const cookiesWrapperRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const handleAcceptClick = () => {
    setVisible(false)
  }
  useEffect(() => {
    if (cookiesWrapperRef.current) {
      cookiesWrapperRef.current.style.display = visible ? 'flex' : 'none'
    }
  }, [visible])
  return (
    <CookiesWrapper ref={cookiesWrapperRef} visible={visible}>
      <CookiesHold>
        <CookiesText>
          <p>
            We use cookies to improve your experience. By using this website you
            agree to our{' '}
            <a style={{ textDecoration: 'underline' }} href="/">
              Cookie Policy
            </a>
            .
          </p>
        </CookiesText>
        <CookiesBtns>
          <StyledButton href="/">
            <span>LEARN</span>
          </StyledButton>
          <StyledButton
            onClick={handleAcceptClick}
            style={{ color: 'white', backgroundColor: '#003c47' }}
          >
            <span>ACCEPT</span>
          </StyledButton>
        </CookiesBtns>
      </CookiesHold>
    </CookiesWrapper>
  )
}

export default Cookies
