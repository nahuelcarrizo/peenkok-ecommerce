import {
  Content,
  FooterContainer,
  GridContainer,
  GridItem,
  Link,
  LinkList,
  LinkListItem,
  Panel,
  SocialContent,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledText,
  SuscribeContainer,
} from './footer.styles'

import Logo from './logo'
import React, {useEffect} from 'react'

const Suscribe = () => (
  <SuscribeContainer>
    <Content>
      <StyledText>
        JOIN US
        <br />
        FOR DEALS & <br />
        TO HELP OUR PLANET
      </StyledText>
      <StyledForm>
        <StyledInput type="text" placeholder="EMAIL" />
        <StyledButton>OK</StyledButton>
      </StyledForm>
    </Content>
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
        { label: 'Privacy Policy', url:  '/privacy-policy' },
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
      <Panel>
        <Suscribe />
        <GridContainer>
          <SocialContent>
            {rows.map((row, index) => (
              <GridItem key={index}>
                <LinkList>
                  {row.links.map((link, linkIndex) => (
                    <LinkListItem key={linkIndex}>
                      <Link href={link.url}>{link.label}</Link>
                    </LinkListItem>
                  ))}
                </LinkList>
              </GridItem>
            ))}
          </SocialContent>
        </GridContainer>
      </Panel>
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
