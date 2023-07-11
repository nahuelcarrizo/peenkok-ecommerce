import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { CartContext, CartContextType } from '../../../context/index'
import React, { forwardRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Banner from './banner'
import { IconContext } from 'react-icons'
import { IoBag } from 'react-icons/io5'
import Link from 'next/link'
import Logo from './logoeditado'
import Marquee from 'react-fast-marquee'
import { fallDown as Menu } from 'react-burger-menu'
import PageTransition from '../transitions/pageTransition'
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
import { useRouter } from 'next/router'

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
    fixed
    w-full
  `};
  color: #f36600;
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
`
const Nav = styled.nav`
  ${tw`
      flex
      flex-row
      justify-center
      items-start
  `}
  height: 100%;
  width: 100%;
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
`

const BottomRow = styled.div`S
  ${tw`
        flex
        justify-center
       w-full
        place-items-center
        relative
    `};
  width: 100vw;
  padding: 0.2rem 1.3vw;
/*   border-bottom: 1px solid black; */
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

const options = {
  damping: 0.04,
  renderByPixels: true,
}

const StyledLi = styled.li`
  font-family: 'Circular Std Medium';
  letter-spacing: -0.2px;
  font-size: 1rem;
  margin: 0;
  list-style: none;
  text-align: center;
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
  /*  margin-bottom: 4px; */
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  position: relative;
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

const UserIcon = styled.div`
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
  position: relative;
  /*   z-index: 10; */
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
const MainLogo = styled.div`
  /* width: 100vw;
  height: 23vw;
  top: 2.7vw; */
  align-items: center;
  display: flex;
  position: absolute;
  /*   top: 250%; */
  left: 50%;
  transform: translate(-49.5%, 26vh);
  height: 25rem;
  width: 96.5vw;
  align-items: center;
  justify-content: center;
  /* z-index: 7; */
  /*  height: 6vh;
  width: 8.9rem; */
  /*   transition: transform 0.7s cubic-bezier(0.16, 1.08, 0.38, 0.98); */
  will-change: transform;
  /*   transform-origin: left top; */
`

const FixedLogo = styled(Logo)`
  /*  height: 30px; */
  /*   position: fixed; */
`

interface NavbarProps {
  navbarItems: { _key: string; title: string; link: string }[]
}

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const isLargeDevice = useMediaQuery({ query: '(min-width: 1024px' })
  const [isAfterPosition, setAfterPosition] = useState(false)
  const listRef = useRef<HTMLUListElement | null>(null)
  const TopRowRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLDivElement | null>(null)

  const { toggleMenu, setToggleMenu } = useContext<CartContextType>(CartContext)
  const StyledIconsRef = useRef<HTMLDivElement | null>(null)

  const items = [
    { _key: '1', title: 'SHOP', link: '/onprogress' },
    { _key: '2', title: 'STORIES', link: '/onprogress' },
    { _key: '3', title: 'ACTIVISM', link: '/onprogress' },
    { _key: '4', title: 'LOYALTY', link: '/onprogress' },
    { _key: '5', title: 'ABOUT US', link: '/onprogress' },
  ]
  const renderNavbarItems = () => {
    return items.map(el => (
      <StyledLi key={el._key}>
        <StyledLink isAfterPosition={isAfterPosition} href={el.link}>
          {el.title}
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
    const ctx = gsap.context(() => {
      const heroRef = document.querySelector('#hero-container')
      const heroImg = document.querySelector('.hero-image')

      const tl = gsap.timeline()

      const movX = window.innerWidth * 0.936
      const movY = window.innerHeight * 0.003
      console.log(movX)
      tl.to(logoRef.current, {
        scale: 0.069,
        x: -movX,
        y: -movY,
      })
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        pin: heroRef,
        pinType: 'transform',
        end: () => window.innerHeight,
        scrub: 1,
        toggleActions: 'play none reverse none',
        animation: tl,
        onLeave: () => tl3.play(),
        onEnterBack: () => tl3.reverse(),
      })
      const tl2 = gsap.timeline()

      tl2.to(heroRef, {
        scale: 0.975,
      })
      tl2.to(
        heroImg,
        {
          scale: 1.019,
          /*         delay: 0.5, */
        },
        '<',
      )
      const tl3 = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.2,
          ease: 'power1.inOut',
        },
      })
      tl3.to(
        '.navbar-container',
        {
          backgroundColor: 'white',

          color: 'black',
        },
        '<',
      )
      tl3.to(
        '.navbar-icons',
        {
          backgroundColor: 'transparent',
        },
        '<',
      )
      tl3.to(
        '.navbar-container',
        {
          borderBottom: '1px solid black',
          ease: 'linear',
        },
        '>',
      )

      ScrollTrigger.create({
        scrub: 1,
        start: 'top top',
        end: 200,
        trigger: heroRef,
        toggleActions: 'play none reverse none',
        animation: tl2,
        onEnter: () => console.log('start'),
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <NavbarContainer
        isMenuOpen={isMenuOpen}
        isScrolling={isScrolling}
        className="navbar-container"
      >
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
              zIndex: '10',
              overflowY: 'hidden',
            }}
          >
            <Banner />
          </Marquee>
        </TopRow>
        <BottomRow>
          <MainLogo id="LogoContainer" ref={logoRef}>
            <FixedLogo />
          </MainLogo>
          <Nav isMenuOpen={isMenuOpen || isScrolling}>
            <StyledList
              isAfterPosition={isAfterPosition}
              ref={listRef}
              id="list"
            >
              {renderNavbarItems()}
            </StyledList>
          </Nav>
          <IconContext.Provider
            value={{
              size: '0.9vw',
              color: 'black',
            }}
          >
            <StyledIcons ref={StyledIconsRef}>
              <CartIcon
                className="navbar-icons"
                onClick={() => setToggleMenu(prev => !prev)}
              >
                <IoBag />
              </CartIcon>
              <UserIcon className="navbar-icons">
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
        {/*       {!isLargeDevice && <Border isMenuOpen={isMenuOpen || isScrolling} />} */}
      </NavbarContainer>
      <Menu noOverlay fallDown isOpen={open} styles={styles}>
        <ul id="list">{renderNavbarItems()}</ul>
      </Menu>
    </>
  )
}

export default Navbar
