import React, { useState } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/isomorphicEffect';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useStateContext } from '../context/StateContext';
import { StripePayment } from '../components/checkout/index';
import { sanity } from '../../lib/sanity'

const Payment = () => {
    const [clientSecret, setClientSecret] = useState("")
    // const [items, setItems] = useState([])
    const [ids, setIds] = useState([])
    const [itemsPrice, setItemsPrices] = useState();
    const [stripePromise, setStripePromise] = useState(null);

    useIsomorphicLayoutEffect(() => {
        const totalPrice = sessionStorage.getItem('totalPrice');
        const parsedtotalPrice = JSON.parse(totalPrice)
        // setIds(parsedCartItems.map(item => item._id))

        // const fetchItemPrices = async () => {
        //     let itemPrices = {};
        //     for (const id of ids) {
        //         const product = await sanity.fetch(
        //             `
        //             *[_type == "product" && _id == ${id}][0]{
        //                 _id,
        //                 price
        //             }`
        //         );
        //         console.log("product: " + product)
        //         if (product) {
        //             itemPrices[id] = product.price;
        //         }
        //     }
        //     setItemPrices(itemPrices);
        //     console.log("itemPrices", JSON.stringify(itemPrices))
        // };

        // fetchItemPrices();

        // setItems(JSON.parse(cartItems))


        
        fetch("/api/config").then(async (res) => {
            const { publishableKey } = await res.json();
            setStripePromise(loadStripe(publishableKey));
        })


        // },[])


        // useIsomorphicLayoutEffect(() => {

        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                parsedtotalPrice
            }),
        })
            .then(async (res) => await res.json())
            .then((data) => setClientSecret(data.clientSecret));

    }, [])

    const appearance = {
        theme: 'stripe',
        labels: 'floating',
        variables: {
            colorPrimary: 'black',
            colorBackground: '#ffffff',
            colorText: 'black',
            colorDanger: 'black',
            // fontFamily: 'Circular Std Book',
            fontSizeBase: '.85rem',
            spacingUnit: '3px',
            fontWeight: '800',
            borderRadius: '1px',
            // See all possible variables below
        },
        rules: {
            '.Tab': {
                border: '1px solid rgb(209 213 219)',
                boxShadow: 'none',
            },
            '.Tab--selected:active': {
                border: '1px solid black',
                boxShadow: 'none',
            },
            '.Tab--selected:focus': {
                border: '2px solid black',
                boxShadow: 'none',
                backgroundColor: 'rgb(246, 246, 246)',
            },
            '.Tab:active': {
                border: '1px solid black',
                boxShadow: 'none',

            },
            '.Tab:focus': {
                border: '1px solid black',
                boxShadow: 'none',
            },
            '.Input': {
                fontWeight: '600',
                border: '1px solid rgb(209, 213, 219)',
            },
            '.Input:focus': {
                boxShadow: 'none',
                border: '2px solid black',
            },
            '.Label': {
                fontWeight: '600',
                color: 'rgb(112, 112, 112)'
            },
            '.Label--resting': {
                fontSize: '1rem'
            }

        }
        // variables: {
        //     colorPrimary: '#f36600',
        // },
    };
    const options = {
        clientSecret,
        appearance,
    }


    return <>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <StripePayment />
            </Elements>
        )}
    </>

}

export default Payment;