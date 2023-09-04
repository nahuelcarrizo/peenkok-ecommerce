import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { IoChevronDownOutline } from 'react-icons/io5'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 4.3vh;
  padding-left: 1.8vw;
  padding-right: 1.8vw;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 5vh;
  align-items: center;
`

const Input = styled.input`
  flex: 1 1 auto;
  width: 100%;
  font-size: 1.4vw;
  border-bottom: 1px solid black;
  border-radius: 2px;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  ::placeholder {
    color: #3f3c3c;
    appearance: none;
  }
  :focus {
    outline: none;
  }
  padding: 10px 30px 10px 40px;
  height: 40px;
  line-height: 1;
`
const Icon = styled.div`
  position: absolute;
  z-index: 10;
  left: 0.2rem;
`

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1vh;
  font-size: 1.3vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Summary = styled.div`
  /*   font-size: 1.1vw; */
`
const FilterSelection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding-bottom: 1vh;
`
const Search = ({ count, orderProducts }) => {
  const productText = count === 1 ? 'Product' : 'Products'
  return (
    <Container>
      <Form>
        <Icon>
          <IconContext.Provider
            value={{
              size: '1.7vw',
              color: '#4d4949',
            }}
          >
            <AiOutlineSearch />
          </IconContext.Provider>
        </Icon>
        <Input name="q" placeholder="Search products" />
      </Form>
      <SummaryContainer>
        <Summary>
          {count} {productText}
        </Summary>
        <FilterSelection>
          <span>Price, low to high</span>
          <IoChevronDownOutline />
        </FilterSelection>
      </SummaryContainer>
    </Container>
  )
}

export default Search
