import React, { useState } from 'react';
import { useIsomorphicLayoutEffect } from '../../../hooks/isomorphicEffect';
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { Form, LogoPeenkok, LogoStripe, SecureCheckout, ConfirmButton, Spinner, PaymentContainer, PaymentContent } from '../Checkout.styles'
import PuffLoader from 'react-spinners/PuffLoader'
import { AiFillLock } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const StripePayment = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useIsomorphicLayoutEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe])


    const handleStripePayment = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!stripe || !elements) {
            console.log('aqui')
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }


        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: 'http://localhost:3000/success',
            },
        });
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
            console.log(message)
        } else {
            setMessage("An unexpected error occurred.");
            console.log(message)
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: {
            type: 'tabs',
            // defaultCollapsed: false,
            // radios: true,
            // spacedAccordionItems: false
        },
    }

    return (<>
        <PaymentContainer>
            <LogoPeenkok src='/assets/LogoPeenkok.svg' alt='logo peenkok' />
            <PaymentContent>
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <Form onSubmit={handleStripePayment}>
                    <ConfirmButton style={{ marginBottom: '1rem' }} type='submit' disabled={isLoading || !stripe || !elements} id="submit">
                        <span id="button-text" style={{ position: 'relative' }}>
                            {isLoading ? <Spinner><PuffLoader color={'gray'} size={40} /></Spinner> : "Go for it"}
                        </span>
                    </ConfirmButton>
                </Form>
                {message && <div id="payment-message">{message}</div>}
                <SecureCheckout>
                    <span style={{ paddingRight: '.7rem' }}>
                        <IconContext.Provider value={{ size: '1.4rem' }} >
                            <AiFillLock />
                        </IconContext.Provider>
                    </span>
                    Guaranteed&nbsp;<strong>   safe & secure </strong>&nbsp;checkout <LogoStripe src='/poweredByStripe.svg' alt='powered by stripe' />
                </SecureCheckout>
            </PaymentContent>
        </PaymentContainer>
    </>)
}

export default StripePayment;