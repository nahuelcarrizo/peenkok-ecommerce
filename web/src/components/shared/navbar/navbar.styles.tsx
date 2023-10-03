import Link from 'next/link'
import Logo from './logoeditado'
import styled from 'styled-components'
import tw from 'twin.macro'

export const NavbarContainer = styled.div`
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

export const StyledList = styled.ul`
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
export const Nav = styled.nav`
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

export const TopRow = styled.div`
  ${tw`
        flex
        justify-center
        items-center
    `};
`

export const BottomRow = styled.div`
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

export const StyledLi = styled.li`
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

export const StyledLink = styled(Link)`
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
export const CartIcon = styled.button`
  position: relative;
  border-radius: 50%;
  background-color: #f36600;
  height: 1.9vw;
  width: 1.9vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserIcon = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #f36600;
  height: 1.9vw;
  width: 1.9vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  /*   z-index: 10; */
  height: auto;
  gap: 6px;
  background-color: transparent;
  color: black;
`

export const CartCounter = styled.span`
  ${tw`
  absolute
  `}
  font-size: .8vw;
  font-family: 'Circular Std Bold';
  color: #f36600;
  top: 16%;
  left: 58%;
`
export const MainLogo = styled.div`
  /* width: 100vw;
  top: 2.7vw; */
  cursor: pointer;
  align-items: center;
  display: flex;
  position: absolute;
  /*   top: 250%; */
  left: 50%;
  transform: translate(-49.5%, 26vh);
  height: 29rem;
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

export const FixedLogo = styled(Logo)`
  /*  height: 30px; */
  /*   position: fixed; */
`
