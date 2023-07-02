import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { CartContext, CartContextType } from '../../../context/index'
import React, { forwardRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Banner from './banner'
import { IconContext } from 'react-icons'
import { IoBag } from 'react-icons/io5'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { fallDown as Menu } from 'react-burger-menu'
import { RiUser3Line } from 'react-icons/ri'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import UseAnimations from 'react-useanimations'
import { device } from '../../../config/device'
import { gsap } from 'gsap/dist/gsap'
import menu2 from 'react-useanimations/lib/menu2'
import styles from './menuStyles'
import tw from 'twin.macro'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'
import { useMediaQuery } from 'react-responsive'

interface NavbarContainerProps {
  isMenuOpen: boolean
  isScrolling: boolean
}

const NavbarContainer = styled.div<NavbarContainerProps>`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    z-10
    absolute
    w-full
  `};

  z-index: 9;
  @media ${device.movilXL} {
    background-color: transparent;
  }
`

const StyledNav = tw.nav`
    relative
`

interface StyledProps {
  isAfterPosition: boolean
}

const StyledList = styled.ul<StyledProps>`
  display: inline-flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  position: fixed;
  align-self: center;
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f36600;
    z-index: -2;
    transform: ${({ isAfterPosition }) =>
      isAfterPosition ? 'translateY(0%)' : 'translateY(100%)'};
    transition: transform 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);
  }
`
const Nav = styled.nav<NavProps>`
  ${tw`
      flex
      flex-row
      justify-center
      items-start
      w-full
      h-full
    /*   [font-size: 6vw] */
  `}
  position: relative;
  color: ${({ isMenuOpen }) => (isMenuOpen ? 'black' : '#F36600')};
  transition: color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1)
    ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.4s')};
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
`

const BottomRow = styled.div`
  ${tw`
        inline-flex
        justify-center
       w-full
        relative
        place-items-center
    `};
  z-index: 9;
  top: 1.2rem;
  /*   @media ${device.portatilL} {
    height: 4.5vh;
  }
  @media ${device.portatil} {
    height: 5vh;
  } */
  width: 92vw;
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

const StyledLi = styled.li`
  font-family: 'Circular Std Medium';
  letter-spacing: -0.2px;
  font-size: 1.1rem;

  margin: 0;
  list-style: none;
  text-align: center;
  height: 1.7rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`
interface StyledLinkProps {
  isAfterPosition: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>`
  ${tw`
  px-2
  w-full
  h-full
`};

  display: inline-flex;
  align-items: center;
  color: ${({ isAfterPosition }) => (isAfterPosition ? 'black' : '#F36600')};
  overflow: hidden;
  position: relative;
  transition: color 0.4s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  &:hover {
    &:after {
      transform: translate3d(100%, 0px, 0px);
    }
    color: #f36600;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 100%;
    height: 95%;
    width: 100%;
    background-color: black;
    z-index: -1;
    transition: transform 0.4s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0s;
  }
`
const CartIcon = styled.button`
  position: relative;
  border-radius: 50%;
  background-color: #f36600;
  height: 1.9vw;
  width: 1.9vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserIcon = styled(Link)`
  position: relative;
  border-radius: 50%;
  background-color: #f36600;
  height: 1.9vw;
  width: 1.9vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  height: auto;
  gap: 6px;
  background-color: transparent;
`

const CartCounter = styled.span`
  ${tw`
  absolute
  `}
  font-size: .8vw;
  font-family: 'Circular Std Bold';
  color: #f36600;
  top: 16%;
  left: 58%;
`
interface NavbarProps {
  navbarItems: { _key: string; title: string; link: string }[];
}
const Navbar = forwardRef<HTMLDivElement, NavbarProps>(function NavBar({ navbarItems }: any, ref) {
  const items = navbarItems.navbarItems
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const isLargeDevice = useMediaQuery({ query: '(min-width: 1024px' })
  const [isAfterPosition, setAfterPosition] = useState(false)
  const listRef = useRef<HTMLUListElement | null>(null)
  const TopRowRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLDivElement | null>(null)

  const { toggleMenu, setToggleMenu } = useContext<CartContextType>(CartContext)
  const StyledIconsRef = useRef<HTMLDivElement | null>(null);
  const renderNavbarItems = () => {
    return items.map(el => (
      <StyledLi key={el._key}>
        <StyledLink isAfterPosition={isAfterPosition} passHref href={el.link}>
          <p style={{ marginBottom: '-3px', position: 'relative' }}>
            {el.title}
          </p>
        </StyledLink>
      </StyledLi>
    ))
  }

  ////manejadores de eventos
  const handleButtonClick = () => {
    setOpen(prevOpen => !prevOpen)
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  useIsomorphicLayoutEffect(() => {

    logoRef.current = document.querySelector('#LogoContainer')

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: listRef.current!,
        start: 'top top',
        end: 99999,
        onToggle: self =>
          self.isActive ? setAfterPosition(true) : setAfterPosition(false),
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <NavbarContainer isMenuOpen={isMenuOpen} isScrolling={isScrolling}>
        <TopRow
          style={{ maxWidth: '100vw' }}
          isMenuOpen={isMenuOpen || isScrolling}
          ref={TopRowRef}
        >
          <Marquee
            autoFill={true}
            speed={65}
            style={{
              height: '3.5vh',
              zIndex: '3000 !important',
              overflowY: 'hidden',
            }}
          >
            <Banner />
          </Marquee>
        </TopRow>
        <BottomRow ref={ref}>
          {isLargeDevice && (
            <Nav isMenuOpen={isMenuOpen || isScrolling}>
              <StyledList
                isAfterPosition={isAfterPosition}
                ref={listRef}
                id="list"
              >
                {renderNavbarItems()}
              </StyledList>
            </Nav>
          )}
          <IconContext.Provider
            value={{
              size: '0.9vw',
            }}
          >
            <StyledIcons ref={StyledIconsRef}>
              <CartIcon onClick={() => setToggleMenu(prev => !prev)}>
                <IoBag />
              </CartIcon>
              <UserIcon href="/">
                <RiUser3Line />
              </UserIcon>
            </StyledIcons>
          </IconContext.Provider>
          {!isLargeDevice && (
            <UseAnimations
              animation={menu2}
              size={35}
              onClick={handleButtonClick}
              speed={2}
              pathCss="stroke-width: 2.5px; transition: stroke 0s ease 0.5s "
              strokeColor={isMenuOpen || isScrolling ? 'black' : '#F36600'}
            />
          )}
        </BottomRow>
        {!isLargeDevice && <Border isMenuOpen={isMenuOpen || isScrolling} />}
      </NavbarContainer>
      <Menu noOverlay fallDown isOpen={open} styles={styles}>
        <ul id="list">{renderNavbarItems()}</ul>
      </Menu>
    </>
  )
})

export default Navbar
