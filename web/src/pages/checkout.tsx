import React from 'react';
import { CheckoutForm, CheckoutCart, CheckoutNavbar } from '../components/checkout/index';
import styled from 'styled-components';
import tw from 'twin.macro';



const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    relative
    w-full
    h-full
  `}`;

const Content = styled.div`
  ${tw`
    relative
    w-full
    h-full
  `}
  display: grid;
  grid-template-columns: 55% 45%;
  `;


const Checkout = () => {
    return (
        <PageContainer>
            <CheckoutNavbar />
            <Content>
                <CheckoutForm />
                <CheckoutCart />
            </Content>
        </PageContainer>
    )
}

export default Checkout;