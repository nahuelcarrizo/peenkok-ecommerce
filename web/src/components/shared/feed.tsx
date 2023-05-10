import React from 'react';
import styled from 'styled-components';

const StoriesContainer = styled.div`
    background-color: black;
    color: white;
`;

const Stories = (props: any) => {
    return(
        <StoriesContainer>{props.title}</StoriesContainer>
    )
}

export default Stories;