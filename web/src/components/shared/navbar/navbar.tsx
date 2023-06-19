import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import styled, { css } from 'styled-components'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Banner from './banner'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { IoBag } from 'react-icons/io5'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { fallDown as Menu } from 'react-burger-menu'
import { RiUser3Line } from 'react-icons/ri'
import Scrollbar from 'smooth-scrollbar'
import UseAnimations from 'react-useanimations'
import { device } from '../../../config/device'
import menu2 from 'react-useanimations/lib/menu2'
import styles from './menuStyles'
import tw from 'twin.macro'
import { useInView } from 'react-intersection-observer'
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
/*    fixed  */
absolute
    w-full
  `};

  z-index: 2000;
  @media ${device.movilXL} {
    background-color: ${({ isMenuOpen, isScrolling }) =>
      isMenuOpen || isScrolling ? 'white' : 'transparent'};
    transition: background-color 0s ease
      ${({ isMenuOpen, isScrolling }) =>
        isMenuOpen || isScrolling ? '0s' : !isMenuOpen ? '.5s' : '1s'};
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
  margin: 0;
  padding: 0;
  position: fixed;
  align-self: center;
  color: black;
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
      [font-size: 6vw]
  `}
  /*   @media ${device.portatilL} {
    margin-top: 0.2vw;
  } */
/*   margin-top: 0.4vw; */
/*   top: 0.3vw; */
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
  /*   border-bottom: 2px solid
    ${({ isMenuOpen }) => (isMenuOpen ? 'black' : '#F36600')};
  transition: border-color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1)
    ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.4s')}; */
  /*   padding: 0.5vw 0; */
`

const BottomRow = styled.div`
  ${tw`
        inline-flex
        justify-center
        w-full
        relative
        h-full
        place-items-center
    `};
  z-index: 2000;
  /*   margin-top: 0.3vw; */
  @media ${device.portatilL} {
    height: 6vh;
  }
  @media ${device.portatil} {
    height: 3.5vw;
  }
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
  @media ${device.portatilL} {
    font-size: 1.1vw;
  }
  font-size: 1.2vw;
  ${tw`text-xl`}
  margin: 0;
  list-style: none;
  text-align: center;
  transition: color 0.4s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  height: 1.8vw;
  overflow: hidden;
  /*   @media ${device.portatilL} {
    height: 4.3vh;
  }
  height: 2.3vw; */
  display: flex;
  align-items: center;
`
interface StyledLinkProps {
  navBackground: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>`
  ${tw`
  px-2
  h-full
  w-full
`};

  display: inline;
  align-items: center;
  color: ${({ navBackground }) => (navBackground ? 'black' : '#F36600')};
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
    height: 97%;
    width: 100%;
    background-color: black;
    z-index: -1;
    transition: transform 0.4s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0s;
  }
`
const CartIcon = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #f36600;
  height: 2.3vw;
  width: 2.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserIcon = styled(Link)`
  position: relative;
  border-radius: 50%;
  background-color: #f36600;
  height: 2.3vw;
  width: 2.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
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

const Navbar = ({ navbarItems, offset, navBackground }) => {
  const items = navbarItems.navbarItems
  const scrollbarRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const isLargeDevice = useMediaQuery({ query: '(min-width: 1024px' })
  const [isAfterPosition, setAfterPosition] = useState(false)

  const renderNavbarItems = () => {
    return items.map(el => (
      <StyledLi key={el._key}>
        <StyledLink navBackground={navBackground} passHref href={el.link}>
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
  useEffect(() => {
    console.log(navBackground)
    if (navBackground) {
      setAfterPosition(true)
    } else {
      setAfterPosition(false)
    }
  }, [navBackground])

  ///////////scroll
  useEffect(() => {
    offset > 10 ? setIsScrolling(true) : setIsScrolling(false)
  }, [offset])
  return (
    <>
      <NavbarContainer isMenuOpen={isMenuOpen} isScrolling={isScrolling}>
        <TopRow
          style={{ maxWidth: '100vw' }}
          isMenuOpen={isMenuOpen || isScrolling}
        >
          <Marquee
            autoFill={true}
            speed={65}
            style={{
              height: '3.5vh',
              zIndex: '3000 !important',
            }}
          >
            <Banner isMenuOpen={isMenuOpen || isScrolling} />
          </Marquee>
        </TopRow>
        <BottomRow>
          {isLargeDevice && (
            <Nav isMenuOpen={isMenuOpen || isScrolling}>
              <StyledList isAfterPosition={isAfterPosition}>
                {renderNavbarItems()}
              </StyledList>
            </Nav>
          )}
          <IconContext.Provider
            value={{
              size: '1.1vw',
            }}
          >
            <StyledIcons>
              <CartIcon>
                <IoBag />
                {/*           <CartCounter>0</CartCounter> */}
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
}

export default Navbar
