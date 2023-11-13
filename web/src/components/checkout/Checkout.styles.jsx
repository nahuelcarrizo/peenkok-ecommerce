import styled from 'styled-components'
import tw from 'twin.macro'
import RemoteFixedSizeImage from '../shared/image-types/remote-fixed-size-image'

//Navbar Elements
export const NavbarContainer = styled.div`
    ${tw`
    w-full
    h-full
    flex
    justify-center
    `}
    border-bottom: 1px solid rgba(244, 102, 0, 0.31);;
    padding: 1vw 20rem;
    
    `
export const Header = styled.header`
width:100%;
display: flex;
flex-direction: row;
align-items: center;

`

// Cart elements
export const CartContainer = styled.aside`
width: 100%;
background-color: rgba(244, 102, 0, 0.31);
padding: 2.2rem 15.75rem 0 3.75rem;
`
export const Summary = styled.div`
background-color: white;
padding: .5rem;
// border-bottom-left-radius: 0;
// border-bottom-right-radius: 0;
border-radius: 1px;
max-height: 70vh;

`
export const Inner = styled.div`
border: 1px solid #686868;
border-top-left-radius: 1px;
border-top-right-radius: 1px;
height: 100%;
overflow-y: scroll;
`

export const Products = styled.ul`
max-height: 70vh;
background-color: white;
`

export const Item = styled.li`
padding: .8rem;
border-bottom: 1px solid #686868;
display: list-item; 
&:last-child {
    border-bottom: none;
  }
`
export const ItemView = styled.figure`
display: grid;
grid-template-columns: 12rem 1fr;
gap: 1rem;
margin: 0;
overflow: hidden;`

export const ImageContent = styled.div`
background-color: rgba(244, 102, 0, 0.1);  `

export const Image = styled(RemoteFixedSizeImage)``

export const ItemInfo = styled.figcaption`
display: flex;
align-items: stretch;
flex-direction: column;
padding-top: .625rem;
padding-bottom: .5rem;
font-family: Helvetica, Arial, san-serif;
& div {
    flex:1;
}
`
export const ItemName = styled.div`
font-size: 1.2rem;
font-weight: 600;`

export const ItemQty = styled.div`
font-size: .8rem;
font-weight: 400;`

export const ItemPrice = styled.div`
margin-left: auto;
font-size: .8125rem;
justify-content: end;
display: flex;
align-items: end;
`

export const DeliveryTime = styled.div`
border: 1px solid #686868;
border-top: none;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 3rem;
padding: .8rem;
font-family: 'Circular Std Book';
font-size: .9rem;
font-weight: 200;
`


export const TotalPrice = styled.div`
border: 1px solid #686868;
border-top: none;
border-bottom-left-radius: 1px;
border-bottom-right-radius: 1px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
font-family: 'Circular Std Book';
padding: 1rem .8rem;
`
export const ShippingMethod = styled.div`
font-size: .9rem;
font-weight: 200;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;`

export const Total = styled.div`
font-size: 1rem;
font-weight: 600;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
font-weight: 600;`







// Form elements
export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    // max-width: 40rem;
    padding: 2.2rem 3rem 2.2rem 20rem;
    height: 100%;
    border-right: 1px solid rgba(244, 102, 0, 0.31);
`
export const Form = styled.form`
   width: 100%;
`

export const FormGroup = styled.div`
padding: 0 0 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1.2rem;
width: 100%;
`

export const FormSection = styled.div`
padding: 0 0 1rem 0;
width: 100%;
#client-info {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; 
    grid-template-rows: repeat(4, 100px); 
    grid-gap: 1.2rem; 
}
#country-select {
    margin-bottom: 1rem;
}

`
export const FormGroup2 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1.2rem;
padding-bottom: 1rem;
`
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
width: 1rem;
height: 1rem;
accent-color: black;

`;
export const Label = styled.label`
    ${tw`
    text-black
    `}
    font-family: 'Circular Std Book';
    font-size: 0.95em;
    // margin-bottom: 3rem;
    // margin-top: 3rem;
    `

export const Input = styled.input`
    ${tw`
    w-full
    px-3
    border
    border-gray-300 
    focus:border-none
    focus:outline-none
    focus:ring-2
    focus:ring-black
    `}
    border-radius: 1px;
    height: 3rem;
    font-size: 0.95em;
    background-color: transparent;
    font-family: 'Circular Std Book';
    font-size: .9rem;
    font-weight: 500;
    transition: padding-top 0.2s ease-in-out;
    ::placeholder {
        color: rgb(112,112,112);
        font-family: 'Circular Std Book';
        font-size: .9rem;
        font-weight: 500;
    }
    `

    export const InputBlocked = styled.div`
    ${tw`
    w-full
    px-3
    flex
    
    focus:border-none
    focus:outline-none
    focus:ring-2
    focus:ring-black
    `}
    border-radius: 1px;
    height: 3.3rem;
    font-size: 0.95em;
    background-color: transparent;
    font-family: 'Circular Std Book';
    font-size: .8rem;
    font-weight: 500;
    transition: padding-top 0.2s ease-in-out;
    background-color: rgba(244, 102, 0, 0.31);
    color: rgb(112,112,112);
    align-items: center;
    `
export const SelectLabelInput = styled.label`
    
    position: absolute;
    top: 0.4rem;
    left:.8rem;
    font-family: 'Circular Std Book';
        font-size: .75rem;
        font-weight: 500;
    color: rgb(112,112,112);
`
    export const Select = styled.select`
    ${tw`
    w-full
    px-3
        border
    border-gray-300
    rounded-sm
    focus:border-none
    focus:outline-none
    focus:ring-2
    focus:ring-black
    `}
    padding-top: 3%;
    font-family: 'Circular Std Book';
    font-size:.9rem;
    background-color: transparent;
    height: 3.1rem;
    appearance: none;
    z-index: 10;
    `
    export const SelectLabel = styled.label`
        font-family: 'Circular Std Book';
        font-size: .8rem;
        font-weight: 500;
    color: rgb(112,112,112);
    position: absolute;
    top: 0.5rem;
    left: .8rem;
    `
    
    export const SpanSvg = styled.span`
    position: absolute;
    right: .7rem;
    top: 1rem;
    z-index: 100;
    `

export const Title = styled.h2` 
    ${tw`
    text-black
    `}
    font-family: 'Circular Std Bold';
    font-size: 1.5em;
    margin-bottom: 0.8rem;
    `

    export const SubTitle = styled.h3`
    ${tw`
    text-black
    `}
    font-family: 'Circular Std Bold';
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    margin-top: 1.2rem;
    `
    

export const RadioGroup = styled.div`
    ${tw`
      flex
      flex-col
    `}
    // height: 100%;
    
  `;
export const RadioOption = styled.div`
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
&:first-child{
    border-start-end-radius: 1px;
    border-start-start-radius: 1px;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    border-bottom: none;
  }
  &:last-child{
    border-block-start-color: rgb(222, 222, 222);
    border-block-start-style: solid;
    border-block-start-width: 1px;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    border-end-end-radius: 1px;
    border-end-start-radius: 1px;
}
    border: 1px solid rgb(222, 222, 222);
    .radio-option {
        right: 1.5rem;
    }
`

export const RadioLabel = styled.label`
    padding: 1.1vw;
    ${tw`
    text-black
    w-full
    h-full
    flex-row
    flex
    // justify-start
    items-center
    `}
    font-family: 'Circular Std Medium';
    font-size: 0.95em;
    cursor: pointer;
    line-height: 24px;
    :checked { 
        background-color: black;
     }
    
`
export const RadioInput = styled.input`
  
    appearance: none;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid rgb(222, 222, 222);
    width: 18px;
    height: 18px;
    line-height: 18px;
    margin: 2px 0 0;
    outline-offset: 0;
    transition: all 0.133333s cubic-bezier(0.3, 0.5, 0.5, 1);
    margin-right: 0.5rem;  
    &:checked {
        border-width: 6px;
        border-color: rgb(0, 0, 0);
}
`;

export const Button = styled.button`
    font-family: 'Circular Std Book';
    font-size:.9rem;
`
export const PayButton = styled.button`
width: 100%;
height: 3rem;
background-color: rgba(244, 102, 0, 0.75) !important;
margin: 1.9rem 0;
border-radius: 2px;
font-family: 'Circular Std Book';
font-size: 1.1rem;
cursor: pointer;
`
export const PaymentInfo = styled.div`
    max-height: 10rem;
    width: 100%;
    background-color: rgb(246, 246, 246);
    display: flex;
    flex-direction: column;
    padding: 1.5rem 3rem;
    text-align: center;
    gap: 1rem;
    font-family: 'Circular Std Book';
    font-size: 0.9rem;
     border: 1px solid rgb(222,222,222)
`

export const ShippingMethodInfo = styled.div`
    border: 1px solid black;
    height: 7rem;
    width: 100%;
    background-color: rgb(246,246,246);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1rem 1rem;
    
`
export const ShippingInfo = styled.div`
    font-family: 'Circular Std Book';
    font-size: 0.9rem;
    flex:1;
    display: flex;
    flex-direction: column;
    & span {
        padding-top: .3rem;
        font-size: 0.9rem;
        color: rgb(112,112,112)
    }
`
export const ShippingPrice = styled.div`
    font-family: 'Circular Std Medium';
    font-size: 0.9rem;
    align-self: flex-start;    
`
export const BillingInfo = styled.div`
    padding: 1rem;
    width: 100%;
    background-color: rgb(246, 246, 246);
    display: flex;
    flex-direction: column;
    font-family: 'Circular Std Book';
    font-size: 0.9rem;
     border: 1px solid rgb(222,222,222);
     & input, select {
        background-color: white !important;
     }
     & label {
        z-index: 100;
     }
`

export const Spinner = styled.div`
position: relative;
margin: 0;
padding:0;
// width: 100%;
// height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
//STRIPE PAYMENT

export const PaymentContainer = styled.div`
height: 100vh;
width: 100vw;
padding: 5rem 30rem;
background-color: rgb(244,244,244);
display: flex;
flex-direction: column;
justify-content: start;    
align-items: center;
gap: 2rem;

`
export const PaymentContent = styled.div`
background-color: white;
padding: 4rem 7rem;
width: 100%;
`

export const ConfirmButton = styled.button`
width: 100%;
height: 3rem;
background-color: rgb(28, 126, 214, 0.75) !important;

margin: 1.9rem 0;
border-radius: 2px;
font-family: 'Circular Std Book';
font-size: 1.1rem;
cursor: pointer;
`

export const SecureCheckout = styled.div`
display: flex;
width: 100%;
flex-direction: row;
font-family: Helvetica;
font-weight: 400;
font-size: 0.9rem;
justify-content: center;
align-items: center;
`

export const LogoStripe = styled.img`
width: 8rem;
height: 3rem;
`

export const LogoPeenkok = styled.img`
width: 30vw;
`