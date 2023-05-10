import { Container } from '../shared/sharedstyles'
import React from 'react';

const About = ({about}: any) => {
    return(
        <Container>{about.text}</Container>
    )
}

export default About;