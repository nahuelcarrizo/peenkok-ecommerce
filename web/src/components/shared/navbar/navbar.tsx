import {
  BottomRow,
  CartIcon,
  FixedLogo,
  MainLogo,
  Nav,
  NavbarContainer,
  StyledIcons,
  StyledLi,
  StyledLink,
  StyledList,
  TopRow,
  UserIcon,
} from './navbar.styles'
import { CartContext, CartContextType } from '../../../context/index'
import React, { useContext } from 'react'
import { useRef, useState } from 'react'

import Banner from './banner'
import { IconContext } from 'react-icons'
import { IoBag } from 'react-icons/io5'
import Marquee from 'react-fast-marquee'
import { fallDown as Menu } from 'react-burger-menu'
import { RiUser3Line } from 'react-icons/ri'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import UseAnimations from 'react-useanimations'
import { gsap } from 'gsap/dist/gsap'
import menu2 from 'react-useanimations/lib/menu2'
import styles from './menuStyles'
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'

interface NavbarProps {
  navbarItems: { _key: string; title: string; link: string }[]
}

const Navbar = () => {
  const [fill, setFill] = useState('#F36600')
  const [open, setOpen] = useState(false)
  const isLargeDevice = useMediaQuery({ query: '(min-width: 1024px' })
  const router = useRouter()
  const logoRef = useRef<HTMLDivElement | null>(null)

  const { toggleMenu, setToggleMenu } = useContext<CartContextType>(CartContext)

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
        <StyledLink href={el.link}>{el.title}</StyledLink>
      </StyledLi>
    ))
  }

  ////manejadores de eventos
  const handleButtonClick = () => {
    router.push('/')

    /*    setOpen(prevOpen => !prevOpen)
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen) */
  }

  useIsomorphicLayoutEffect(() => {
    const isIndex = router.pathname === '/'
    const ctx = gsap.context(() => {
      const heroRef = document.querySelector('#hero-container')
      const heroImg = document.querySelector('.hero-image')
      let tl3
      const movX = window.innerWidth * 0.936
      const movY = window.innerHeight * 0.006
      if (isIndex) {
        setFill('#F36600')
        const tl = gsap.timeline()

        tl.to(logoRef.current, {
          scale: 0.065,
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
          onLeave: () => {
            tl3.play()
            setFill('black')
          },
          onEnterBack: () => {
            tl3.reverse()
            setFill('#F36600')
          },
          onRefreshInit: () => {
            tl3.reverse()
            setFill('#F36600')
          },
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

        tl3 = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.2,
            ease: 'power1.inOut',
          },
        })

        ScrollTrigger.create({
          scrub: 1,
          start: 'top top',
          end: 200,
          trigger: heroRef,
          toggleActions: 'play none reverse none',
          animation: tl2,
        })
      } else {
        setFill('black')
        gsap.set(logoRef.current, {
          scale: 0.069,
          x: -movX,
          y: -movY,
        })

        tl3 = gsap.timeline({
          /*    paused: true, */
          defaults: {
            duration: 0.2,
            ease: 'power1.inOut',
          },
          /*        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            scrub: 1,
          }, */
        })
      }

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
    })

    return () => {
      ScrollTrigger.refresh()
      ctx.revert()
    }
  }, [router.pathname])

  return (
    <>
      <NavbarContainer className="navbar-container">
        <TopRow style={{ maxWidth: '100vw' }}>
          <Marquee
            autoFill={true}
            speed={65}
            style={{
              zIndex: '10',
              overflowY: 'hidden',
            }}
          >
            <Banner />
          </Marquee>
        </TopRow>
        <BottomRow>
          <MainLogo
            id="LogoContainer"
            ref={logoRef}
            onClick={() => handleButtonClick()}
          >
            <FixedLogo fill={fill} />
          </MainLogo>
          <Nav>
            <StyledList id="list">{renderNavbarItems()}</StyledList>
          </Nav>
          <IconContext.Provider
            value={{
              size: '0.9vw',
              color: 'black',
            }}
          >
            <StyledIcons>
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
              strokeColor={'#F36600'}
            />
          )}
        </BottomRow>
      </NavbarContainer>
      <Menu noOverlay fallDown isOpen={open} styles={styles}>
        <ul id="list">{renderNavbarItems()}</ul>
      </Menu>
    </>
  )
}

export default Navbar
