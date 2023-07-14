import styled from 'styled-components'
import tw from 'twin.macro'

export const FooterContainer = styled.footer`
  ${tw`bg-white flex flex-col justify-evenly items-center`}
  height: 100vh;
`

export const GridContainer = styled.div`
  ${tw`container grid-cols-2 items-center flex justify-end`}
  margin-right: 2.5vw;
`

export const GridItem = styled.div`
  ${tw`flex flex-col justify-center`}
  height: fit-content;
`

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 0.9rem;
`

export const LinkListItem = styled.li`
  ${tw`mb-4 [font-family: 'Circular Std Medium']
   [font-size:1.2vw]`}
  display: inline-block;
  width: fit-content;
`

export const Link = styled.a`
  ${tw`hover:text-gray-500 inline-block`}
`

export const SuscribeContainer = styled.div`
  ${tw`flex flex-col justify-center items-start w-full `}
  width: 100%;
  margin-left: 1.3vw;
`

export const StyledForm = styled.form`
  ${tw`flex flex-row`}
  /*   margin-top: 6vw; */
  width: 85%;
  margin-left: 0.5vw;
  height: 1.4vw;
  margin-top: 2vh;
  /*   padding-top: 1.5vw; */
  color: #444444;

  border-bottom: 2px solid #444444;
  font-family: 'Circular Std Bold';
`
export const StyledInput = styled.input`
  ${tw`w-full h-full`}
  outline: none;
  font-size: 1rem;
  text-transform: uppercase;

  ::placeholder {
    font-size: 0.9vw;
    color: #444444;
    font-family: 'Circular Std Medium';
  }
`

export const StyledText = styled.p`
  ${tw`
    [font-size: 2.5rem]
    [font-family: 'Circular Std Bold']
    [line-height:2.3  rem]
    [letter-spacing: -0.5px]
    flex
    text-left
  `}
`
export const StyledButton = styled.button`
  ${tw`h-full`}
  width: 15%;
  font-size: 0.9vw;
`
export const Panel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  /*   width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  /*   top: 23vh; */
`

export const SocialContent = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  gap: 3vw;
`
