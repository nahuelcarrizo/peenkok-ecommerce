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

const ConstruccionPage = () => {
  return (
    <PageContainer>
      <UnderConstructionIcon />
      <Message>¡Sitio web en construcción!</Message>
    </PageContainer>
  )
}

export default ConstruccionPage
