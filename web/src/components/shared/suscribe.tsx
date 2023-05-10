import React from 'react';
import styled from 'styled-components';

const SuscribeContainer = styled.div`
    background-color: black;
    color: white;
`;

const Suscribe = ({suscribe}: any) => {
    return(
        <SuscribeContainer>{suscribe.text}</SuscribeContainer>
    )
}

export default Suscribe;