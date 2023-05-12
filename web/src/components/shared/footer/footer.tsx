import Logo from './logo'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const FooterContainer = styled.footer`
  ${tw`py-6 bg-gray-900 px-4 mt-10 flex flex-col justify-center items-start`}
`

const GridContainer = styled.div`
  ${tw`container grid grid-cols-2 gap-8 pt-6`}
`

const GridItem = styled.div`
  ${tw`flex flex-col justify-center`}
`

const LinkList = styled.ul`
  ${tw`text-gray-500 text-sm`}
  list-style: none;
  padding: 0;
`

const LinkListItem = styled.li`
  ${tw`mb-3 [font-family: 'Circular Std Book'] [font-size: .8rem]`}
`

const Link = styled.a`
  ${tw`hover:text-gray-500`}
`
const StyledTitle = styled.h2`
  ${tw`text-gray-400 font-bold text-lg mb-2`}
  font-family: 'Circular Std Bold';
  letter-spacing: 0.1px;
  font-size: 1rem;
`

const Footer = () => {
  const rows = [
    {
      title: 'Unite Unite',
      links: [
        { label: 'Sobre nosotros', url: '/sobre-nosotros' },
        { label: 'FAQ', url: '/faq' },
        { label: 'Contáctanos', url: '/contactanos' },
      ],
    },
    {
      title: 'Menu Cliente',
      links: [
        { label: 'Cómo comprar', url: '/como-comprar' },
        { label: 'Trackea tu orden', url: '/trackea-tu-orden' },
        { label: 'Cambios & Devoluciones', url: '/cambios-devoluciones' },
      ],
    },
    {
      title: 'Legal Social',
      links: [
        { label: 'Políticas de privacidad', url: '/politicas-privacidad' },
        { label: 'Política de compras', url: '/politica-compras' },
        { label: 'Términos de servicios', url: '/terminos-servicios' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com' },
        { label: 'Twitter', url: 'https://www.twitter.com' },
        { label: 'Facebook', url: 'https://www.facebook.com' },
      ],
    },
  ]

  return (
    <FooterContainer>
      <StyledTitle>UNITE A LA COMUNIDAD</StyledTitle>
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
      <Logo />
      <p
        style={{
          fontSize: '.7rem',
          fontFamily: 'sans-serif',
          marginTop: '20px',
          color: 'gray',
        }}
      >
        © 2023 NAHUEL CARRIZO - TODOS LOS DERECHOS RESERVADOS
      </p>
    </FooterContainer>
  )
}

export default Footer
