import styled from 'styled-components'

export const Container = styled.div`
  width: 98%;
  margin: 1vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Header1 = styled.div`
  font-family: 'Oswald';
  font-size: 4.7vw;
  color: black;
  display: inline;
  margin: -5px 0;
`

export const Price = styled.p`
  font-family: 'Oswald';
  font-size: 1.8vw;
  margin: -3px 0;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  padding: 4vh 0;
  gap: 4vh;
`

export const QuantityVariants = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.5rem;
  width: 100%;
`
export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  gap: 0.6rem 0.5rem;
`
export const PurchaseOptions = styled.div`
  /*   width: 30%; */
  border: 1px solid gray;
  background-color: white;
  height: 9vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0.1vw;
`
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5vw;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1vw;
  width: 100%;
`

export const AddToCartButton = styled.button`
  border: 1px solid #191919;
  width: 90%;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.4vw;
  font-family: 'Oswald';
  padding: 0.8vh 0;
  background-color: #f36600;
  box-sizing: border-box;
  position: absolute;
  flex: 1;
  left: 0;
  display: flex;
  justify-content: center;
`
export const WishButton = styled.div`
  width: 100%;
  border: 1px solid black;
  flex: 0;
`
export const GuideContainer = styled.div`
  width: fit-content;
  align-self: flex-end;
  :hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 0.8vw;
  font-weight: 200;
  top: -2vh;
  right: 5vw;
  cursor: pointer;
`
export const ProdDescription = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-top: 3vh;
  flex: 1;
`
export const ProdDetails = styled.div`
  width: 100%;
  border: 1px solid black;

  flex: 1;
`
export const Label = styled.label`
  align-items: center;
  border-radius: 50px;
  border: 1px solid black;
  display: flex;
  font-size: 1vw;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  height: 3.8vh;
  justify-content: center;
  width: 5vw;
  height: 3.6vh;
  padding: 3px 0;
  cursor: pointer;
  /*   width: 4.5vw; */
`

export const Input = styled.input`
  visibility: hidden;
  position: absolute;
  &:checked + .radio-label {
    background-color: black;
    color: white;
  }
`

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2vw;
`
export const PlanSelector = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.7vw;
  align-items: center;
`
export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /*  justify-content: space-between; */
  height: 100%;
  margin-top: 3vh;
`

export const Header3 = styled.h3`
  font-size: 1.2vw;
  border-bottom: 1px solid black;
  padding: 1.4vh 0;
`

export const Content = styled.div`
  /*   height: 100%; */
  will-change: transform;
`
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /*   border-top: 1px solid black; */
  cursor: pointer;
  :nth-child(1) {
    border-top: 1px solid black;
  }
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`
export const PurchaseFrame = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 0.87vw;
  font-weight: 200;
  gap: 0.2vw;
`
