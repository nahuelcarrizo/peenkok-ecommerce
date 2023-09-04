import { IconContext } from 'react-icons'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 1vh;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CloseButton = styled.div`
  align-self: self-end;
  cursor: pointer;
`
const Title = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 1vw;
  width: 100%;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 0.7vh;
  width: 100%;
`
const Table = styled.table`
  width: 90%;
  margin-block-end: 15px;
  font-size: 0.8em;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  border-collapse: collapse;
  tr {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    th,
    td {
      &:not(:first-of-type) {
        text-align: center;
      }
    }
  }
  td:first-of-type {
    font-weight: 700;
  }
`
const SizeGuide = ({ onClickChange }) => {
  return (
    <Container>
      <Header>
        <Title>SIZE GUIDE</Title>
        <CloseButton onClick={() => onClickChange()}>
          <IconContext.Provider
            value={{
              size: '1.4vw',
              /*  color: '#4d4949', */
            }}
          >
            <MdClose />
          </IconContext.Provider>
        </CloseButton>
      </Header>
      <Image
        src="/assets/CB_SG-34.png"
        width={500}
        height={500}
        alt="Picture for size guide"
        style={{ objectFit: 'contain', height: '70%' }}
      />
      <Table class="cb-size-guide-cm">
        <tbody>
          <tr>
            <th class="font-s"></th>
            <th class="font-s">XS</th>
            <th class="font-s">S</th>
            <th class="font-s">M</th>
            <th class="font-s">L</th>
            <th class="font-s">XL</th>
          </tr>
          <tr>
            <td class="font-s">1 → BODY LENGTH</td>
            <td class="font-s">63</td>
            <td class="font-s">65</td>
            <td class="font-s">67</td>
            <td class="font-s">69</td>
            <td class="font-s">71</td>
          </tr>
          <tr>
            <td class="font-s">2 → SHOULDER WIDTH</td>
            <td class="font-s">39</td>
            <td class="font-s">41</td>
            <td class="font-s">43</td>
            <td class="font-s">45</td>
            <td class="font-s">47</td>
          </tr>
          <tr>
            <td class="font-s">3 → SLEEVE LENGTH</td>
            <td class="font-s">25</td>
            <td class="font-s">26</td>
            <td class="font-s">27</td>
            <td class="font-s">28</td>
            <td class="font-s">29</td>
          </tr>
          <tr>
            <td class="font-s">4 → CHEST WIDTH</td>
            <td class="font-s">48</td>
            <td class="font-s">50</td>
            <td class="font-s">52</td>
            <td class="font-s">54</td>
            <td class="font-s">56</td>
          </tr>
          <tr>
            <td class="font-s">5 → BOTTOM</td>
            <td class="font-s"></td>
            <td class="font-s"></td>
            <td class="font-s"></td>
            <td class="font-s"></td>
            <td class="font-s"></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default SizeGuide
