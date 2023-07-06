import tw, { styled } from 'twin.macro'

import { FaTools } from 'react-icons/fa'
import React from 'react'

// Estilos usando twin.macro
const PageContainer = styled.div`
  ${tw`h-screen flex flex-col justify-center items-center`}
`

const UnderConstructionIcon = styled(FaTools)`
  ${tw`text-4xl mb-4`}
`

const Message = styled.p`
  ${tw`text-xl font-semibold`}
`

const Abou = props => {
  return (
    <div>
      <PageContainer>
        <UnderConstructionIcon />
        <Message>¡Sitio!</Message>
      </PageContainer>
    </div>
  )
}

export default Abou
export async function getServerSideProps(context) {
  await waitload(2)
  return {
    props: { dummy: 'dummy' }, // will be passed to the page component as props
  }
}

function waitload(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000))
}
