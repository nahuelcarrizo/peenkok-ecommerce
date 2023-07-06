import Logo from './logo'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const FooterContainer = styled.footer`
  ${tw`px-4 bg-white flex flex-col justify-evenly items-center`}
  height: 82vh !important;
  margin-top: 18vh;
`

const GridContainer = styled.div`
  ${tw`container grid-cols-2 gap-10 px-4 flex justify-around`}/*   padding-top: 1.5rem; */
`

const GridItem = styled.div`
  ${tw`flex flex-col justify-center`}
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 0.9rem;
`

const LinkListItem = styled.li`
  ${tw`mb-3 [font-family: 'Circular Std Book']
   [font-size:1.2rem]`}
  display: inline-block;
  width: fit-content;
`

const Link = styled.a`
  ${tw`hover:text-gray-500 inline-block`}
`

const SuscribeContainer = styled.div`
  ${tw`flex flex-col justify-center items-center w-full `}
  width: calc(100% - 20vw);
`

const StyledForm = styled.form`
  ${tw`flex flex-row`}
  /*   margin-top: 6vw; */
  width: 21rem;
  height: 4vw;
  /*   padding-top: 1.5vw; */
  padding-left: 1vw;
  border-bottom: 2px solid black;
  font-family: 'Circular Std Bold';
`
const StyledInput = styled.input`
  ${tw`w-full h-full`}
  outline: none;
  font-size: 1rem;
  text-transform: uppercase;

  ::placeholder {
    font-size: 1vw;
    color: black;
    font-family: 'Circular Std Medium';
  }
`

const StyledText = styled.p`
  ${tw`
    [font-size: 2rem]
    [font-family: 'Circular Std Bold']
    [line-height:2rem]
    [letter-spacing: -0.5px]
    flex
    text-center
  `}
`
const StyledButton = styled.button`
  ${tw`h-full`}
  width: 15%;
`

const Suscribe = () => (
  <SuscribeContainer>
    <StyledText>
      JOIN US
      <br />
      FOR DEALS & TO HELP
      <br />
      OUR PLANET
    </StyledText>
    <StyledForm>
      <StyledInput type="text" placeholder="EMAIL" />
      <StyledButton>OK</StyledButton>
    </StyledForm>
  </SuscribeContainer>
)

const Footer = () => {
  const rows = [
    {
      title: 'Menu',
      links: [
        { label: 'Contact Us', url: '/' },
        { label: 'Terms & Conditions', url: '/' },
        { label: 'Shipping Policy', url: '/' },
        { label: 'Privacy Policy', url: '/' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'TikTok', url: '/' },
        { label: 'Instagram', url: '/' },
        { label: 'Youtube', url: '/' },
      ],
    },
  ]

  return (
    <FooterContainer>
      <GridContainer>
        {rows.map((row, index) => (
          <GridItem key={index}>
            <LinkList>
              {row.links.map((link, linkIndex) => (
                <LinkListItem key={linkIndex}>
                  <Link href={link.url}>{link.label.toUpperCase()}</Link>
                </LinkListItem>
              ))}
            </LinkList>
          </GridItem>
        ))}
      </GridContainer>
      <Suscribe />
      <Logo />
      <p
        style={{
          fontSize: '.7rem',
          fontFamily: 'sans-serif',
          color: 'gray',
        }}
      >
        © 2023 NAHUEL CARRIZO - TODOS LOS DERECHOS RESERVADOS
      </p>
    </FooterContainer>
  )
}

export default Footer
