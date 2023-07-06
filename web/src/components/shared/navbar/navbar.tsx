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
  /*   z-index: 15; */
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
        place-items-center
        absolute
    `};
  top: 1.6rem;
  /*   @media ${device.portatilL} {
    height: 4.5vh;
  }
  @media ${device.portatil} {
    height: 5vh;
  } */
  width: 100vw;
  padding: 0 4rem;
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
  /*   z-index: 2000; */
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
  /*  margin-bottom: 4px; */
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
    height: 100%;
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
  /*   position: absolute; */
  align-items: center;
  justify-content: center;
  /* z-index: 7; */
  height: 6vh;
  width: 11vw;
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
    console.log(items)
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

  function middle(target, heroImage) {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        start: 'top top',
        end: () => window.innerHeight,
        trigger: target,
        toggleActions: 'play none reverse none',
      },
      ease: 'power4.easeInOut',
    })

    tl.to(target, {
      scale: 0.975,
    })
    tl.to(heroImage, {
      scale: 1.07,
      /*         delay: 0.5, */
    })
    return tl
  }

  function intro(heroRef) {
    const tl = gsap.timeline()
    tl.from(logoRef.current, {
      scale: 10,
      xPercent: 480,
      yPercent: 480,
      ease: 'power4.easeInOut',
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
      onLeave: () => setAfterPosition(true),
      onEnterBack: () => setAfterPosition(false),
    })

    return tl
  }

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroRef = document.querySelector('#hero-container')
      const heroImg = document.querySelector('.hero-image')

      const master = gsap.timeline()
      master.add(intro(heroRef))
      master.add(middle(heroRef, heroImg))
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
            }}
          >
            <StyledIcons ref={StyledIconsRef}>
              <CartIcon onClick={() => setToggleMenu(prev => !prev)}>
                <IoBag />
              </CartIcon>
              <UserIcon>
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
