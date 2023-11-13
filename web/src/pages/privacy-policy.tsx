import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Content = styled.div`
font-family: 'Circular Std Book';
font-size: 1.5rem;
width: 40vw;
height: 100%;
`

const Title = styled.h1`
font-family: 'Circular Std Bold'
font-size: 1.5rem;
`
const Subtitle = styled.h2`
font-family: 'Circular Std Bold';
font-size: .8rem;`

const Text = styled.p`
font-family: 'Circular Std Book';
font-size: .9rem;`

const PrivacyPolicy = () => {




    return (<>
    <Container>
        <Content>
        <Title><strong>Privacy Policy</strong></Title>
        <Subtitle>I. PRIVACY AND DATA PROTECTION POLICY</Subtitle>
        <Text>In compliance with the provisions of current legislation, PÉENKOK’ (hereinafter also Website) undertakes to adopt the necessary technical and organisational measures, according to the level of security appropriate to the risk of the data collected.
    Laws that incorporate this privacy policy
    This privacy policy is adapted to current Spanish and European legislation on the protection of personal data on the Internet. In particular, it respects the following rules:
   <ul>
    <li>
    Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (GDPR).
    </li>
    <li>
    Organic Law 15/1999 of 13 December 1999 on the Protection of Personal Data (LOPD).
    </li>
    <li>
    Royal Decree 1720/2007, of 21 December, approving the Regulation implementing Organic Law 15/1999, of 13 December, on the Protection of Personal Data (RDLOPD).
    </li>
    <li>
    Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE).
    </li>
    </ul> 
    </Text>
        </Content>
    </Container>
    </>)
}

export default PrivacyPolicy;