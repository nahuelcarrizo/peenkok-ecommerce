import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'

import Banner from './banner'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import Logo from './logo'
import Marquee from 'react-fast-marquee'
import { fallDown as Menu } from 'react-burger-menu'
import { RiUser3Line } from 'react-icons/ri'
import UseAnimations from 'react-useanimations'
import menu2 from 'react-useanimations/lib/menu2'
import styled from 'styled-components'
import styles from './menuStyles'
import tw from 'twin.macro'
import { useInView } from 'react-intersection-observer'

interface NavbarContainerProps {
  isMenuOpen: boolean
}

const NavbarContainer = styled.div<NavbarContainerProps>`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    z-10
    fixed
    w-full
  `};

  z-index: 2000;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? 'white' : 'transparent'};
  transition: background-color 0s ease
    ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.5s')};
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
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  &:hover {
    color: #003c47;
  }
`

const StyledIcons = styled.div`
  display: inline-flex;
  font-size: 0.8rem;
  flex-direction: row;
  position: relative;
`

interface TopRowProps {
  isMenuOpen: boolean
}

const TopRow = styled.div<TopRowProps>`
  ${tw`
        flex
        justify-center
        items-center
    `};
  border-bottom: 2px solid
    ${({ isMenuOpen }) => (isMenuOpen ? 'black' : '#F36600')};
  transition: border-color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1)
    ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.4s')};
  padding: 0.5vw 0;
`

const BottomRow = styled.div`
  ${tw`
        flex
        justify-between
        w-full
        relative
        pl-4
    h-full
    `};
  z-index: 2000;
  height: 16vw;
`

const StyledSpan = styled.span`
  ${tw`
        [font-size: .8rem]
        [font-family: 'Circular Std Bold']
        pl-2
    `};
`
interface NavProps {
  isMenuOpen: boolean
}
const Nav = styled.nav<NavProps>`
  ${tw`
      flex
      flex-row
      w-full
      h-full
      justify-between
      items-center
      [font-size: 6vw]
      pr-4
      [width: 35%]
  `}
  color: ${({ isMenuOpen }) => (isMenuOpen ? 'black' : '#F36600')};
  transition: color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1)
    ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.4s')};
`
const StyledMenu = styled.div`
  position: absolute;
  height: 22vw;
  right: 1rem;
  display: flex;
  align-items: center;
`

interface BorderProps {
  isMenuOpen: boolean
}
const Border = styled.div<BorderProps>`
  width: 100%;
  border-bottom: 2px solid
    ${({ isMenuOpen }) => (isMenuOpen ? 'black' : '#F36600')};
  transition: border-bottom 1s ease;
  z-index: 2000;
`
const options = {
  damping: 0.04,
  renderByPixels: true,
}

const Navbar = ({ navbarItems }) => {
  const items = navbarItems.navbarItems
  const scrollbarRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)

  const renderNavbarItems = () => {
    return items.map(el => (
      <li key={el._key}>
        <StyledLink href={el.link}>{el.title}</StyledLink>
      </li>
    ))
  }

  const handleButtonClick = () => {
    setOpen(prevOpen => !prevOpen)
    setIsMenuOpen(PrevisMenuOpen => !PrevisMenuOpen)
  }

  const handleChange = state => {
    console.log(state)
  }
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [open])

  ///////////scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    setIsScrolling(scrollPosition > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <NavbarContainer isMenuOpen={isMenuOpen || isScrolling}>
        <TopRow
          style={{ maxWidth: '100vw' }}
          isMenuOpen={isMenuOpen || isScrolling}
        >
          <Marquee
            autoFill={true}
            speed={65}
            style={{ height: '5.5vw', zIndex: '3000 !important' }}
          >
            <Banner isMenuOpen={isMenuOpen || isScrolling} />
          </Marquee>
        </TopRow>
        <BottomRow>
          <Logo isMenuOpen={isMenuOpen || isScrolling} />
          <Nav isMenuOpen={isMenuOpen || isScrolling}>
            <AiOutlineShopping />
            <RiUser3Line />
            <UseAnimations
              animation={menu2}
              size={35}
              onClick={handleButtonClick}
              speed={2}
              pathCss="stroke-width: 2.5px; transition: stroke 0s ease 0.5s "
              strokeColor={isMenuOpen || isScrolling ? 'black' : '#F36600'}
            />
          </Nav>
        </BottomRow>
        <Border isMenuOpen={isMenuOpen || isScrolling} />
      </NavbarContainer>
      <Menu
        noOverlay
        fallDown
        isOpen={open}
        styles={styles}
        onStateChange={handleChange}
      >
        <ul id="list">{renderNavbarItems()}</ul>
      </Menu>
    </>
  )
}

export default Navbar
