import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import React, { useEffect, useRef, useState } from 'react'

import Banner from './banner'
import { BiUser } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import Logo from './logo'
import Marquee from 'react-fast-marquee'
import { slide as Menu } from 'react-burger-menu'
import Scrollbar from 'smooth-scrollbar'
import { device } from '../../../config/device'
import styled from 'styled-components'
import styles from './menuStyles'
import tw from 'twin.macro'
import { useMediaQuery } from 'react-responsive'

const NavbarContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-center
        items-center
        z-10
        fixed
    `};
  background-color: #fdfbf5;
`

const StyledMenu = styled.div`
  ${tw`   
        flex
        w-full
        relative
    `};
  height: 3.3rem;
`

const StyledNav = tw.nav`
    relative
`

const StyledList = styled.ul`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  font-family: 'Circular Std Black';
  font-size: 1.3rem;

  @media ${device.desktop} {
    font-size: 0.8rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  &:hover {
    color: #003c47;
  }
`
const StyledClock = styled.div`
  font-family: 'Circular Std Bold';
  display: inline-flex;
  font-size: 1.2rem;
  flex-direction: row;
  position: relative;
  transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  will-change: transform;
`

const StyledIcons = styled.div`
  display: inline-flex;
  font-size: 0.8rem;
  flex-direction: row;
  position: relative;
`

const TopRow = styled.div`
  ${tw`
        flex
        justify-center
        items-center
        border-b
        border-black
    `};
`

const BottomRow = styled.div`
  ${tw`
        flex
        justify-between
        w-full
        border-b
        border-black
        pl-4
    `};
`

const RigthMenu = styled.div`
  ${tw`
        flex
        justify-between
        items-center
        w-full
        pl-10
    `};
`

const StyledBurguer = styled.div`
  ${tw`
        p-5
        border-l
        border-black
        h-full
    `};
`

const StyledSpan = styled.span`
  ${tw`
        [font-size: .8rem]
        [font-family: 'Circular Std Bold']
        pl-2
    `};
`

const options = {
  damping: 0.04,
  renderByPixels: true,
}

const continuousTransform = offset => {
  const minOffset = 70
  const maxOffset = 190

  // Map offset to a value between 0 and 1
  const normalizedOffset = Math.min(
    (offset - minOffset) / (maxOffset - minOffset),
    1,
  )

  // Calculate opacity based on the normalized offset
  const opacity = 1 - 1 * normalizedOffset

  // Return the opacity value
  return opacity
}

const BarcelonaClock = () => {
  const [now, setNow] = useState<null | string>(null)
  const BarcelonaClockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clock = BarcelonaClockRef.current

    const interval = setInterval(() => {
      setNow(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Europe/Madrid',
          hour12: false,
        }),
      )
    }, 1000)

    /*     const scrollbar = () => {
      Scrollbar.init(document.body, options).addListener(function (status) {
        const offset = status.offset

        clock.style.opacity = continuousTransform(offset.y)
      })
    }
    scrollbar() */
    /*     const elements = document.getElementsByClassName('scrollbar-track show')
    if (elements.length > 0) {
      elements[0].style.opacity = '0'
    } */
    return () => clearInterval(interval)
  }, [])
  return (
    <StyledClock ref={BarcelonaClockRef}>
      <span>BARCELONA</span>
      <span>{now}</span>
    </StyledClock>
  )
}

const Navbar = ({ navbarItems }) => {
  const items = navbarItems.navbarItems
  const scrollbarRef = useRef(null)
  const isDesktop = useMediaQuery({ minWidth: device.desktop })

  const renderNavbarItems = () => {
    return items.map(el => (
      <li key={el._key}>
        <StyledLink href={el.link}>{el.title}</StyledLink>
      </li>
    ))
  }

  return (
    <>
      <NavbarContainer>
        <TopRow style={{ maxWidth: '100vw' }}>
          <Marquee autoFill={true} style={{ height: '2rem' }}>
            <Banner />
          </Marquee>
        </TopRow>
        <BottomRow>
          <Logo />
          <StyledMenu>
            {isDesktop ? (
              <>
                {/*                 <BarcelonaClock /> */}
                <StyledNav>
                  <StyledList>renderNavbarItems()</StyledList>
                </StyledNav>

                <StyledIcons>
                  <BiUser />
                  <AiOutlineShopping />
                </StyledIcons>
              </>
            ) : (
              <RigthMenu>
                <StyledSpan>INGRESAR</StyledSpan>
                <StyledSpan>CARRITO (0)</StyledSpan>
                <StyledBurguer>
                  <Menu right styles={styles}>
                    <ul>{renderNavbarItems()}</ul>
                  </Menu>
                </StyledBurguer>
              </RigthMenu>
            )}
          </StyledMenu>
        </BottomRow>
      </NavbarContainer>
    </>
  )
}

export default Navbar
