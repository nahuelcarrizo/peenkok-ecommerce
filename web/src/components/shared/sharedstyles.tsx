import { device } from '../../config/device'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`
    flex
    flex-col
    overflow-hidden
    relative
    w-full
    h-full
  `};
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

export { Container, Main, Title, Description }
