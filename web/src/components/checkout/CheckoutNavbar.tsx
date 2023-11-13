import React from 'react';
import logo from '../shared/navbar/logo';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IoBagOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import { NavbarContainer, Header } from './Checkout.styles';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Logo = styled.img`
    height: 6vw;
    flex:1;
    `

const CheckoutNavbar = () => {
    const router = useRouter();

    const handleVolver = () => {
      router.back(); // Esta función retrocede a la página anterior
    };

    return (
        <NavbarContainer>
            <Header>
                <button onClick={handleVolver}> 
                    <IconContext.Provider value={{ size: '1.3rem' }}>
                        <IoBagOutline />
                    </IconContext.Provider>
                </button>
                    <Logo src='/assets/LogoPeenkok.svg' alt='Logo Peenkok' />
            </Header>
        </NavbarContainer>
    );
}

export default CheckoutNavbar;