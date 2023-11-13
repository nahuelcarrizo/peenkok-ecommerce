import React, { useState, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks/isomorphicEffect';
import { BiChevronDown, BiStore } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsCreditCard } from 'react-icons/bs'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { IconContext } from 'react-icons';
import { Spinner, BillingInfo, Form, Select, ShippingInfo, ShippingPrice, ShippingMethodInfo, PaymentInfo, PayButton, SpanSvg, SubTitle, InputBlocked, FormSection, Checkbox, SelectLabelInput, FormGroup2, Button, FormContainer, SelectLabel, FormGroup, Label, Input, RadioGroup, RadioInput, RadioLabel, Title, RadioOption } from './Checkout.styles'
import PuffLoader from 'react-spinners/PuffLoader'
import { useStateContext } from '../../context/StateContext';
import { Router, useRouter } from 'next/router';

const FORM_ENDPOINT = "http://localhost:3000/api/payment";

const CheckoutForm = () => {
    const inputApartmentRef = useRef()
    const inputBillingApartmentRef = useRef()
    // const [email, setEmail] = useState('')
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState("ship")
    const [paymentMethod, setPaymentMethod] = useState("stripe")
    const [billingMethod, setBillingMethod] = useState("sameAsShipping")
    const [submitted, setSubmitted] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('ES');
    const [selectedBillingCountry, setSelectedBillingCountry] = useState('ES');
    const [addAppartments, setAddAppartments] = useState(false)
    const { cartItems } = useStateContext()
    const router = useRouter()
    // useIsomorphicLayoutEffect(() => {
    //     if (!stripe) {
    //         return;
    //     }

    //     const clientSecret = new URLSearchParams(window.location.search).get(
    //         "payment_intent_client_secret"
    //     );

    //     if (!clientSecret) {
    //         return;
    //     }

    //     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //         switch (paymentIntent.status) {
    //             case "succeeded":
    //                 setMessage("Payment succeeded!");
    //                 break;
    //             case "processing":
    //                 setMessage("Your payment is processing.");
    //                 break;
    //             case "requires_payment_method":
    //                 setMessage("Your payment was not successful, please try again.");
    //                 break;
    //             default:
    //                 setMessage("Something went wrong.");
    //                 break;
    //         }
    //     });
    // }, [stripe])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)


        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        console.log("data: " + data)

        router.push('/payment')
        // window.location.href = window.location.origin + '/payment';
        setIsLoading(false);
        

        // fetch('/api/payment', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('Form response was not ok');
        //         }
        //         // setSubmitted(true);
        //         return response.json()
        //     }).then((data) => {

        //         if (data.redirect) {
        //             window.location.href = window.location.origin + '/payment';
        //         } else {
        //             e.target.submit();
        //         }
        //     })
        //     .catch((err) => {

        //         // Submit the form manually

        //     }).finally(() => {

        //         setIsLoading(false);
        //     });

    };

    // const handleStripePayment = async (e) => {
    //     e.preventDefault();

    //     if (!stripe || !elements) {
    //         // Stripe.js hasn't yet loaded.
    //         // Make sure to disable form submission until Stripe.js has loaded.
    //         return;
    //     }

    //     setIsLoading(true);

    //     const { error } = await stripe.confirmPayment({
    //         elements,
    //         confirmParams: {
    //             // Make sure to change this to your payment completion page
    //             return_url: "http://localhost:3000/success",
    //         },
    //     });
    //     if (error.type === "card_error" || error.type === "validation_error") {
    //         setMessage(error.message);
    //     } else {
    //         setMessage("An unexpected error occurred.");
    //     }

    //     setIsLoading(false);
    // };



    const handleCheckedPayment = (e) => {
        setPaymentMethod(e.target.value)
    }
    const handleCheckedBilling = (e) => {
        setBillingMethod(e.target.value)
    }

    const handleChecked = (e) => {
        setDeliveryMethod(e.target.value)

    }
    const handleCountryChange = (event) => {

        setSelectedCountry(event.target.value);
    };

    const handleBillingCountryChange = (event) => {

        setSelectedBillingCountry(event.target.value);
    };

    const [inputState, setInputState] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false,
        input6: false,
        input7: false,
        input8: false,
        input9: false,
        input10: false,
        input11: false,
        input12: false,
        input13: false,
        input14: false,
        input15: false,
        input16: false,
        input17: false,
        input18: false,
        input19: false,
        input20: false,
        input21: false,
        input22: false,
        input23: false,
        input24: false,
    });

    const [isWriting, setIsWriting] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false,
        input7: false,
        input8: false,
        input9: false,
        input10: false,
        input11: false,
        input12: false,
        input13: false,
        input14: false,
        input15: false,
        input16: false,
        input17: false,
        input18: false,
        input19: false,
        input20: false,
        input21: false,
        input22: false,
        input23: false,
        input24: false,
    })


    const handleKey = (inputName) => {
        setInputState({
            ...inputState,
            [inputName]: true,
        });
        setIsWriting({
            ...isWriting,
            [inputName]: true,
        })
    };
    const handleChange = (e, inputName) => {
        const value = e.target.value;
        const isEmpty = value === '';
        setInputState({
            ...inputState,
            [inputName]: !isEmpty,
        });
        setIsWriting({
            ...inputState,
            [inputName]: !isEmpty,
        });
    };

    const handleClick = () => {
        setAddAppartments(prev => !prev)
    }
    useIsomorphicLayoutEffect(() => {
        if (addAppartments && inputApartmentRef.current) {
            inputApartmentRef.current.focus();
        }
    }, [addAppartments]);

    const countries = [
        { name: 'España', code: 'ES' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Francia', code: 'FR' },
        { name: 'Andorra', code: 'AD' },
        { name: 'Marruecos', code: 'MA' },
        { name: 'Italia', code: 'IT' },
    ];
    const provinces = {
        ES: ['', 'Andalucía', 'Cataluña', 'Comunidad de Madrid'],
        PT: ['', 'Lisboa', 'Oporto', 'Algarve'],
        FR: ['', 'Occitania', 'Nueva Aquitania', 'Provenza-Alpes-Costa Azul'],
        AD: ['', 'Andorra la Vella', 'Encamp', 'Canillo'],
        MA: ['', 'Tánger-Tetuán-Alhucemas', 'Casablanca-Settat', 'Fez-Mequinez'],
        IT: ['', 'Lombardía', 'Lacio', 'Cerdeña'],
    };

    return (
        <FormContainer>
            <Form id="payment-form" onSubmit={handleSubmit} action={'/api/payment'} method="POST">
                <FormSection>
                    <Title>Contact</Title>
                    <Input
                        type="email"
                        id="contact-email"
                        name="contact-email"
                        // value={email}
                        placeholder='Email'

                    />
                    <div style={{ paddingTop: '0.8rem' }}>
                        <Checkbox type='checkbox'
                            id='contact-suscribe'
                            name='contact-suscribe'
                            value='yes'
                            style={{ marginRight: '.5vw' }}
                        />
                        <Label htmlFor="contact-suscribe">
                            Email me with news and offers
                        </Label>
                    </div>
                </FormSection>
                <FormSection>
                    <Title >
                        Delivery
                    </Title>
                    <RadioGroup>
                        <RadioOption style={{ backgroundColor: deliveryMethod === 'ship' && 'rgb(246, 246, 246)', borderColor: deliveryMethod === 'ship' && 'black', borderBottom: deliveryMethod === 'ship' && '1px solid black' }}>
                            <RadioLabel htmlFor='ship' >
                                <RadioInput
                                    type="radio"
                                    name="delivery-method"
                                    // checked={setDeliveryMethod ==='ship'}
                                    id="ship"
                                    value="ship"
                                    onChange={handleChecked}
                                    checked={deliveryMethod === 'ship'}
                                />
                                Ship
                            </RadioLabel>
                            <SpanSvg className='radio-option'>
                                <IconContext.Provider value={{ size: '1.2rem', color: deliveryMethod === 'ship' ? 'black' : 'rgb(112,112,112)' }}>
                                    <TbTruckDelivery />
                                </IconContext.Provider>
                            </SpanSvg>
                        </RadioOption>
                        <RadioOption style={{ backgroundColor: deliveryMethod === 'pickup' && 'rgb(246, 246, 246)', borderColor: deliveryMethod === 'pickup' && 'black', }}>
                            <RadioLabel htmlFor="pickup">
                                <RadioInput
                                    type="radio"
                                    name="delivery-method"
                                    value="pickup"
                                    id='pickup'
                                    onChange={handleChecked}
                                />
                                Pick Up
                            </RadioLabel>
                            <SpanSvg className='radio-option'>
                                <IconContext.Provider value={{ size: '1.2rem', color: deliveryMethod === 'pickup' ? 'black' : 'rgb(112,112,112)' }}>
                                    <BiStore />
                                </IconContext.Provider>
                            </SpanSvg>
                        </RadioOption>
                    </RadioGroup>
                </FormSection>
                {deliveryMethod == 'ship' ?
                    (<>
                        <FormSection id="client-info">
                            <div style={{ position: 'relative' }}>
                                <SelectLabel htmlFor="country-select">
                                    Country
                                </SelectLabel>
                                <Select id="country-select" onChange={handleCountryChange}>
                                    {countries.map((country, index) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </Select>
                                <SpanSvg>
                                    <IconContext.Provider value={{ size: '1.2rem', color: 'rgb(112,112,112)' }}>
                                        <BiChevronDown />
                                    </IconContext.Provider>
                                </SpanSvg>
                            </div>

                            <FormGroup>
                                <SelectLabelInput htmlFor="first-name" style={{ visibility: isWriting.input1 ? 'visible' : 'hidden' }}>
                                    First name
                                </SelectLabelInput >
                                <Input

                                    id="first-name"
                                    onKeyDown={() => handleKey('input1')}
                                    onChange={(e) => handleChange(e, 'input1')}
                                    onBlur={(e) => handleChange(e, 'input1')}
                                    type="text"
                                    name="name"
                                    placeholder={inputState.input1 ? '' : 'First name'}
                                    style={{ paddingTop: isWriting.input1 ? '1rem' : '' }}
                                />
                                <div style={{ position: 'relative' }}>

                                    <SelectLabelInput htmlFor="last-name" style={{ visibility: isWriting.input2 ? 'visible' : 'hidden' }}>
                                        Last name
                                    </SelectLabelInput >
                                    <Input

                                        id='last-name'
                                        onKeyDown={() => handleKey('input2')}
                                        onChange={(e) => handleChange(e, 'input2')}
                                        onBlur={(e) => handleChange(e, 'input2')}
                                        type="text"
                                        name="lastname"
                                        placeholder={inputState.input2 ? '' : 'Last name'}
                                        style={{ paddingTop: isWriting.input2 ? '1rem' : '' }}
                                    />
                                </div>
                            </FormGroup>
                            <div style={{ position: 'relative' }}>
                                <SelectLabelInput htmlFor="contact-address" style={{ visibility: isWriting.input3 ? 'visible' : 'hidden' }}>
                                    Address
                                </SelectLabelInput >
                                <Input

                                    id='contact-address'
                                    type="text"
                                    name="address"
                                    onKeyDown={() => handleKey('input3')}
                                    onChange={(e) => handleChange(e, 'input3')}
                                    onBlur={(e) => handleChange(e, 'input3')}
                                    placeholder={inputState.input3 ? '' : 'Address'}
                                    style={{ paddingTop: isWriting.input3 ? '1rem' : '', marginBottom: '1.2rem' }}
                                />
                            </div>

                            {!addAppartments ? <Button onClick={handleClick}>+ Add apartment, suite, etc.</Button> :
                                <div style={{ position: 'relative' }}>
                                    <SelectLabelInput htmlFor="contact-apartment" style={{ visibility: isWriting.input4 ? 'visible' : 'hidden' }}>
                                        Apartment, suite, etc. (optional)
                                    </SelectLabelInput >
                                    <Input
                                        ref={inputApartmentRef}
                                        id='contact-apartment'
                                        type="text"
                                        name="apartment"
                                        onKeyDown={() => handleKey('input4')}
                                        onChange={(e) => handleChange(e, 'input4')}
                                        onBlur={(e) => handleChange(e, 'input4')}
                                        placeholder={inputState.input4 ? '' : 'Apartment, suite, etc. (optional)'}
                                        style={{ paddingTop: isWriting.input4 ? '1rem' : '' }}
                                    />
                                </div>
                            }
                        </FormSection>
                        <FormGroup2>
                            <SelectLabelInput htmlFor="contact-city" style={{ visibility: isWriting.input5 ? 'visible' : 'hidden' }}>
                                City
                            </SelectLabelInput >
                            <Input

                                type="text"
                                name="city"
                                onKeyDown={() => handleKey('input5')}
                                onChange={(e) => handleChange(e, 'input5')}
                                onBlur={(e) => handleChange(e, 'input5')}
                                placeholder={inputState.input5 ? '' : 'City'}
                                style={{ paddingTop: isWriting.input5 ? '1rem' : '' }}
                            />
                            <div style={{ position: 'relative' }}>
                                <SelectLabel htmlFor="province-select" style={{ top: inputState.input6 ? '0.5rem' : '1rem', fontSize: '.9rem' }}>
                                    Province
                                </SelectLabel>
                                <Select style={{ paddingTop: '9%' }} id="province-select" onChange={(e) => handleChange(e, 'input6')}>
                                    {provinces[selectedCountry]?.map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </Select>
                                <SpanSvg>
                                    <IconContext.Provider value={{ size: '1.2rem', color: 'rgb(112,112,112)' }}>
                                        <BiChevronDown />
                                    </IconContext.Provider>
                                </SpanSvg>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <SelectLabelInput htmlFor="contact-postal" style={{ visibility: isWriting.input7 ? 'visible' : 'hidden' }}>
                                    Postal code
                                </SelectLabelInput >
                                <Input

                                    type="text"
                                    name="contact-postal"
                                    onKeyDown={() => handleKey('input7')}
                                    onChange={(e) => handleChange(e, 'input7')}
                                    onBlur={(e) => handleChange(e, 'input7')}
                                    placeholder={inputState.input7 ? '' : 'Postal code'}
                                    style={{ paddingTop: isWriting.input7 ? '1rem' : '' }}
                                />
                            </div>
                        </FormGroup2>
                        <div style={{ position: 'relative' }}>
                            <SelectLabelInput htmlFor="contact-phone" style={{ visibility: isWriting.input8 ? 'visible' : 'hidden' }}>
                                Phone
                            </SelectLabelInput >
                            <Input

                                id='contact-phone'
                                type="tel"
                                name="phone"
                                onKeyDown={() => handleKey('input8')}
                                onChange={(e) => handleChange(e, 'input8')}
                                onBlur={(e) => handleChange(e, 'input8')}
                                placeholder={inputState.input8 ? '' : 'Phone'}
                                style={{ paddingTop: isWriting.input8 ? '1rem' : '' }}
                            />
                        </div>
                        <FormSection style={{ marginBottom: '1rem' }}>
                            <SubTitle >Shipping method</SubTitle>
                            {!inputState.input3 ? <InputBlocked><p>Enter your shipping address to view available shipping methods.</p></InputBlocked> :
                                <ShippingMethodInfo>{selectedCountry == 'ES' ? (<><ShippingInfo>DHL DOMESTIC EXPRESS DELIVERY<span>3-5 business days.<br />
                                    Please Allow 1 Day for order processing. Please note All orders exclude duties, taxes and customs clearance Fees.</span></ShippingInfo><ShippingPrice>$ 5</ShippingPrice></>) : (<><ShippingInfo>DHL EXPRESS WORLDWIDE<span>7-14 business days.<br />
                                        Please Allow 1 Day for order processing. Please note All orders exclude duties, taxes and customs clearance Fees.</span></ShippingInfo><ShippingPrice>$ 15</ShippingPrice></>)}</ShippingMethodInfo>}
                        </FormSection>
                    </>) : (<>
                        <FormSection style={{ marginBottom: '1rem' }}>
                            <SubTitle >Pickup location</SubTitle>
                            <ShippingMethodInfo style={{ height: '5rem' }}>
                                <ShippingInfo>Carrer de los carretes 2<span>Carrer de los carretes 2, 5to 5ta, Barcelona, Spain</span>
                                </ShippingInfo>
                                <ShippingPrice>Free</ShippingPrice>
                            </ShippingMethodInfo>
                        </FormSection>
                    </>)
                }
                <FormSection>
                    <Title>Payment</Title>
                    <p style={{ fontFamily: 'Helvetica, Arial, san-serif', fontSize: '0.9rem', color: 'rgb(112,112,112)', marginBottom: '1.5rem' }}>
                        All transactions are secure and encrypted.
                    </p>
                    <RadioGroup>
                        <RadioOption style={{ backgroundColor: paymentMethod === 'stripe' && 'rgb(246, 246, 246)', borderColor: paymentMethod === 'stripe' && 'black', borderBottom: paymentMethod === 'stripe' && '1px solid black' }}>
                            <RadioLabel htmlFor='stripe' >
                                <RadioInput
                                    type="radio"
                                    name="payment-method"
                                    id="stripe"
                                    value="stripe"
                                    onChange={handleCheckedPayment}
                                    checked={paymentMethod === 'stripe'}
                                />
                                Card, Apple pay & Google Pay
                            </RadioLabel>
                            <SpanSvg className='radio-option'>
                                <IconContext.Provider value={{ size: '1.2rem', color: paymentMethod === 'stripe' ? 'black' : 'rgb(112,112,112)' }}>
                                    <BsCreditCard />
                                </IconContext.Provider>
                            </SpanSvg>
                        </RadioOption>
                        {paymentMethod === 'stripe' &&
                            <PaymentInfo style={{ borderBottom: 'none' }}>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" className="eHdoK"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path><circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle><circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle><circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path></svg>

                                After clicking “Pay now”, you will be redirected to <br /> Stripe to complete your purchase securely.
                            </PaymentInfo>
                        }
                        <RadioOption style={{ backgroundColor: paymentMethod === 'transfer' && 'rgb(246, 246, 246)', borderColor: paymentMethod === 'transfer' && 'black', }}>
                            <RadioLabel htmlFor="transfer">
                                <RadioInput
                                    type="radio"
                                    name="payment-method"
                                    value="transfer"
                                    id='transfer'
                                    onChange={handleCheckedPayment}
                                />
                                Wire transfer
                            </RadioLabel>
                            <SpanSvg className='radio-option'>
                                <IconContext.Provider value={{ size: '1.2rem', color: paymentMethod === 'transfer' ? 'black' : 'rgb(112,112,112)' }}>
                                    <FaMoneyBillTransfer />
                                </IconContext.Provider>
                            </SpanSvg>
                        </RadioOption>
                        {paymentMethod === 'transfer' &&
                            <PaymentInfo >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.3 356.1 163 80.9" className="eHdoK"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-108.9 404.1v30c0 1.1-.9 2-2 2H-231c-1.1 0-2-.9-2-2v-75c0-1.1.9-2 2-2h120.1c1.1 0 2 .9 2 2v37m-124.1-29h124.1"></path><circle cx="-227.8" cy="361.9" r="1.8" fill="currentColor"></circle><circle cx="-222.2" cy="361.9" r="1.8" fill="currentColor"></circle><circle cx="-216.6" cy="361.9" r="1.8" fill="currentColor"></circle><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M-128.7 400.1H-92m-3.6-4.1 4 4.1-4 4.1"></path></svg>
                                After clicking "Pay now," you will be provided <br /> with the necessary banking information to complete your purchase.
                            </PaymentInfo>}
                    </RadioGroup>
                </FormSection>

                {deliveryMethod === 'ship' ?
                    <>
                        <FormSection>
                            <SubTitle >Billing address</SubTitle>

                            <RadioGroup>
                                <RadioOption style={{ backgroundColor: billingMethod === 'sameAsShipping' && 'rgb(246, 246, 246)', borderColor: billingMethod === 'sameAsShipping' && 'black', borderBottom: billingMethod === 'sameAsShipping' && '1px solid black' }}>
                                    <RadioLabel htmlFor='sameAsShipping' >
                                        <RadioInput
                                            type="radio"
                                            name="billing-method"
                                            id="sameAsShipping"
                                            value="sameAsShipping"
                                            onChange={handleCheckedBilling}
                                            checked={billingMethod === 'sameAsShipping'}
                                        />
                                        Same as shipping address
                                    </RadioLabel>
                                </RadioOption>
                                <RadioOption style={{ backgroundColor: billingMethod === 'differentBilling' && 'rgb(246, 246, 246)', borderColor: billingMethod === 'differentBilling' && 'black', }}>
                                    <RadioLabel htmlFor="differentBilling">
                                        <RadioInput
                                            type="radio"
                                            name="billing-method"
                                            value="differentBilling"
                                            id='differentBilling'
                                            onChange={handleCheckedBilling}
                                        />
                                        Use a different billing address
                                    </RadioLabel>
                                </RadioOption>
                                {billingMethod === 'differentBilling' &&
                                    <BillingInfo>
                                        <FormSection id="billing-client-info">
                                            <div style={{ position: 'relative', marginBottom: '1rem' }}>
                                                <SelectLabel htmlFor="billing-country-select">
                                                    Country
                                                </SelectLabel>
                                                <Select id="billing-country-select" onChange={handleBillingCountryChange}>
                                                    {countries.map((country, index) => (
                                                        <option key={country.code} value={country.code}>
                                                            {country.name}
                                                        </option>
                                                    ))}
                                                </Select>
                                                <SpanSvg>
                                                    <IconContext.Provider value={{ size: '1.2rem', color: 'rgb(112,112,112)' }}>
                                                        <BiChevronDown />
                                                    </IconContext.Provider>
                                                </SpanSvg>
                                            </div>
                                            <FormGroup>
                                                <SelectLabelInput htmlFor="billing-first-name" style={{ visibility: isWriting.input9 ? 'visible' : 'hidden' }}>
                                                    First name
                                                </SelectLabelInput >
                                                <Input

                                                    id="billing-first-name"
                                                    onKeyDown={() => handleKey('input9')}
                                                    onChange={(e) => handleChange(e, 'input9')}
                                                    onBlur={(e) => handleChange(e, 'input9')}
                                                    type="text"
                                                    name="billing-name"
                                                    placeholder={inputState.input9 ? '' : 'First name'}
                                                    style={{ paddingTop: isWriting.input9 ? '1rem' : '' }}
                                                />
                                                <div style={{ position: 'relative' }}>

                                                    <SelectLabelInput htmlFor="billing-last-name" style={{ visibility: isWriting.input10 ? 'visible' : 'hidden' }}>
                                                        Last name
                                                    </SelectLabelInput >
                                                    <Input

                                                        id='billing-last-name'
                                                        onKeyDown={() => handleKey('input10')}
                                                        onChange={(e) => handleChange(e, 'input10')}
                                                        onBlur={(e) => handleChange(e, 'input10')}
                                                        type="text"
                                                        name="billing-lastname"
                                                        placeholder={inputState.input10 ? '' : 'Last name'}
                                                        style={{ paddingTop: isWriting.input10 ? '1rem' : '' }}
                                                    />
                                                </div>
                                            </FormGroup>
                                            <div style={{ position: 'relative' }}>
                                                <SelectLabelInput htmlFor="billing-contact-address" style={{ visibility: isWriting.input11 ? 'visible' : 'hidden' }}>
                                                    Address
                                                </SelectLabelInput >
                                                <Input

                                                    id='billing-contact-address'
                                                    type="text"
                                                    name="billing-address"
                                                    onKeyDown={() => handleKey('input11')}
                                                    onChange={(e) => handleChange(e, 'input11')}
                                                    onBlur={(e) => handleChange(e, 'input11')}
                                                    placeholder={inputState.input11 ? '' : 'Address'}
                                                    style={{ paddingTop: isWriting.input11 ? '1rem' : '', marginBottom: '1.2rem' }}
                                                />
                                            </div>

                                            {!addAppartments ? <Button onClick={handleClick}>+ Add apartment, suite, etc.</Button> :
                                                <div style={{ position: 'relative' }}>
                                                    <SelectLabelInput htmlFor="billing-contact-apartment" style={{ visibility: isWriting.input12 ? 'visible' : 'hidden' }}>
                                                        Apartment, suite, etc. (optional)
                                                    </SelectLabelInput >
                                                    <Input
                                                        ref={inputBillingApartmentRef}
                                                        id='billing-contact-apartment'
                                                        type="text"
                                                        name="billing-apartment"
                                                        onKeyDown={() => handleKey('input12')}
                                                        onChange={(e) => handleChange(e, 'input12')}
                                                        onBlur={(e) => handleChange(e, 'input12')}
                                                        placeholder={inputState.input12 ? '' : 'Apartment, suite, etc. (optional)'}
                                                        style={{ paddingTop: isWriting.input12 ? '1rem' : '' }}
                                                    />
                                                </div>
                                            }
                                        </FormSection>
                                        <FormGroup2>
                                            <SelectLabelInput htmlFor="billing-contact-city" style={{ visibility: isWriting.input13 ? 'visible' : 'hidden' }}>
                                                City
                                            </SelectLabelInput >
                                            <Input
                                                type="text"
                                                name="billing-city"
                                                onKeyDown={() => handleKey('input13')}
                                                onChange={(e) => handleChange(e, 'input13')}
                                                onBlur={(e) => handleChange(e, 'input13')}
                                                placeholder={inputState.input13 ? '' : 'City'}
                                                style={{ paddingTop: isWriting.input13 ? '1rem' : '' }}
                                            />
                                            <div style={{ position: 'relative' }}>
                                                <SelectLabel htmlFor="billing-province-select" style={{ top: inputState.input14 ? '0.5rem' : '1rem', fontSize: '.9rem' }}>
                                                    Province
                                                </SelectLabel>
                                                <Select style={{ paddingTop: '9%' }} id="billing-province-select" onChange={(e) => handleChange(e, 'input14')}>
                                                    {provinces[selectedBillingCountry]?.map((province) => (
                                                        <option key={province} value={province}>
                                                            {province}
                                                        </option>
                                                    ))}
                                                </Select>
                                                <SpanSvg>
                                                    <IconContext.Provider value={{ size: '1.2rem', color: 'rgb(112,112,112)' }}>
                                                        <BiChevronDown />
                                                    </IconContext.Provider>
                                                </SpanSvg>
                                            </div>
                                            <div style={{ position: 'relative' }}>
                                                <SelectLabelInput htmlFor="billing-contact-postal" style={{ visibility: isWriting.input15 ? 'visible' : 'hidden' }}>
                                                    Postal code
                                                </SelectLabelInput >
                                                <Input

                                                    type="text"
                                                    name="billing-postal-code"
                                                    onKeyDown={() => handleKey('input15')}
                                                    onChange={(e) => handleChange(e, 'input15')}
                                                    onBlur={(e) => handleChange(e, 'input15')}
                                                    placeholder={inputState.input15 ? '' : 'Postal code'}
                                                    style={{ paddingTop: isWriting.input15 ? '1rem' : '' }}
                                                />
                                            </div>
                                        </FormGroup2>
                                        <div style={{ position: 'relative' }}>
                                            <SelectLabelInput htmlFor="billing-contact-phone" style={{ visibility: isWriting.input16 ? 'visible' : 'hidden' }}>
                                                Phone
                                            </SelectLabelInput >
                                            <Input

                                                id='billing-contact-phone'
                                                type="tel"
                                                name="billing-phone"
                                                onKeyDown={() => handleKey('input16')}
                                                onChange={(e) => handleChange(e, 'input16')}
                                                onBlur={(e) => handleChange(e, 'input16')}
                                                placeholder={inputState.input16 ? '' : 'Phone'}
                                                style={{ paddingTop: isWriting.input16 ? '1rem' : '' }}
                                            />
                                        </div>
                                    </BillingInfo>
                                }
                            </RadioGroup>
                        </FormSection>
                    </>
                    :
                    <>
                        <FormSection id="billing-client-info">
                            <SubTitle >Billing address</SubTitle>
                            <div style={{ position: 'relative' }}>
                                <SelectLabel htmlFor="billing-country-select">
                                    Country
                                </SelectLabel>
                                <Select id="country-select" onChange={handleBillingCountryChange}>
                                    {countries.map((country, index) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </Select>
                                <SpanSvg>
                                    <IconContext.Provider value={{ size: '1.2rem', color: 'rgb(112,112,112)' }}>
                                        <BiChevronDown />
                                    </IconContext.Provider>
                                </SpanSvg>
                            </div>
                            <FormGroup>
                                <SelectLabelInput htmlFor="billing-first-name" style={{ visibility: isWriting.input17 ? 'visible' : 'hidden' }}>
                                    First name
                                </SelectLabelInput >
                                <Input

                                    id="billing-first-name"
                                    onKeyDown={() => handleKey('input17')}
                                    onChange={(e) => handleChange(e, 'input17')}
                                    onBlur={(e) => handleChange(e, 'input17')}
                                    type="text"
                                    name="billing-name"
                                    placeholder={inputState.input17 ? '' : 'First name'}
                                    style={{ paddingTop: isWriting.input17 ? '1rem' : '' }}
                                />
                                <div style={{ position: 'relative' }}>

                                    <SelectLabelInput htmlFor="last-name" style={{ visibility: isWriting.input18 ? 'visible' : 'hidden' }}>
                                        Last name
                                    </SelectLabelInput >
                                    <Input

                                        id='last-name'
                                        onKeyDown={() => handleKey('input18')}
                                        onChange={(e) => handleChange(e, 'input18')}
                                        onBlur={(e) => handleChange(e, 'input18')}
                                        type="text"
                                        name="billing-lastname"
                                        placeholder={inputState.input18 ? '' : 'Last name'}
                                        style={{ paddingTop: isWriting.input18 ? '1rem' : '' }}
                                    />
                                </div>
                            </FormGroup>
                            <div style={{ position: 'relative' }}>
                                <SelectLabelInput htmlFor="billing-contact-address" style={{ visibility: isWriting.input19 ? 'visible' : 'hidden' }}>
                                    Address
                                </SelectLabelInput >
                                <Input
                                    id='billing-contact-address'
                                    type="text"
                                    name="address"
                                    onKeyDown={() => handleKey('input19')}
                                    onChange={(e) => handleChange(e, 'input19')}
                                    onBlur={(e) => handleChange(e, 'input19')}
                                    placeholder={inputState.input19 ? '' : 'Address'}
                                    style={{ paddingTop: isWriting.input19 ? '1rem' : '', marginBottom: '1.2rem' }}
                                />
                            </div>

                            {!addAppartments ? <Button onClick={handleClick}>+ Add apartment, suite, etc.</Button> :
                                <div style={{ position: 'relative' }}>
                                    <SelectLabelInput htmlFor="billing-contact-apartment" style={{ visibility: isWriting.input20 ? 'visible' : 'hidden' }}>
                                        Apartment, suite, etc. (optional)
                                    </SelectLabelInput >
                                    <Input
                                        ref={inputBillingApartmentRef}
                                        id='billing-contact-apartment'
                                        type="text"
                                        name="apartment"
                                        onKeyDown={() => handleKey('input20')}
                                        onChange={(e) => handleChange(e, 'input20')}
                                        onBlur={(e) => handleChange(e, 'input20')}
                                        placeholder={inputState.input20 ? '' : 'Apartment, suite, etc. (optional)'}
                                        style={{ paddingTop: isWriting.input20 ? '1rem' : '' }}
                                    />
                                </div>
                            }
                        </FormSection>
                        <FormGroup2>
                            <SelectLabelInput htmlFor="billing-contact-city" style={{ visibility: isWriting.input21 ? 'visible' : 'hidden' }}>
                                City
                            </SelectLabelInput >
                            <Input
                                type="text"
                                name="billing-city"
                                onKeyDown={() => handleKey('input21')}
                                onChange={(e) => handleChange(e, 'input21')}
                                onBlur={(e) => handleChange(e, 'input21')}
                                placeholder={inputState.input21 ? '' : 'City'}
                                style={{ paddingTop: isWriting.input21 ? '1rem' : '' }}
                            />
                            <div style={{ position: 'relative' }}>
                                <SelectLabel htmlFor="billing-province-select" style={{ top: inputState.input22 ? '0.5rem' : '1rem', fontSize: '.9rem' }}>
                                    Province
                                </SelectLabel>
                                <Select style={{ paddingTop: '9%' }} id="billin-province-select" onChange={(e) => handleChange(e, 'input22')}>
                                    {provinces[selectedBillingCountry]?.map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </Select>
                                <SpanSvg>
                                    <IconContext.Provider value={{ size: '1.2rem', color: 'rgb(112,112,112)' }}>
                                        <BiChevronDown />
                                    </IconContext.Provider>
                                </SpanSvg>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <SelectLabelInput htmlFor="billing-contact-city" style={{ visibility: isWriting.input23 ? 'visible' : 'hidden' }}>
                                    Postal code
                                </SelectLabelInput >
                                <Input
                                    type="text"
                                    name="billing-postal-code"
                                    onKeyDown={() => handleKey('input23')}
                                    onChange={(e) => handleChange(e, 'input23')}
                                    onBlur={(e) => handleChange(e, 'input23')}
                                    placeholder={inputState.input23 ? '' : 'Postal code'}
                                    style={{ paddingTop: isWriting.input23 ? '1rem' : '' }}
                                />
                            </div>
                        </FormGroup2>
                        <div style={{ position: 'relative' }}>
                            <SelectLabelInput htmlFor="billing-contact-phone" style={{ visibility: isWriting.input24 ? 'visible' : 'hidden' }}>
                                Phone (optional)
                            </SelectLabelInput >
                            <Input
                                id='billing-contact-phone'
                                type="tel"
                                name="phone"
                                onKeyDown={() => handleKey('input24')}
                                onChange={(e) => handleChange(e, 'input24')}
                                onBlur={(e) => handleChange(e, 'input24')}
                                placeholder={inputState.input24 ? '' : 'Phone (optional)'}
                                style={{ paddingTop: isWriting.input24 ? '1rem' : '' }}
                            />
                        </div>
                    </>
                }
                <PayButton type='submit' id="submit" >
                    <span id="button-text" style={{ position: 'relative' }}>
                        {isLoading ? <Spinner><PuffLoader color={'gray'} size={40} /></Spinner> : "Pay now"}
                    </span>
                </PayButton>
            </Form>
        </FormContainer >
    );
}

export default CheckoutForm;