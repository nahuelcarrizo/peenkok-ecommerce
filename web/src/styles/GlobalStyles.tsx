import { CSSObject, createGlobalStyle } from 'styled-components'
import tw, { globalStyles, theme } from 'twin.macro'

import React from 'react'

const myTheme = {
  colors: {
    primary: '#fdfbf5', // Aquí puedes asignar el color que desees
  },
}

const GlobalStyles = createGlobalStyle({
  body: {
    ...tw`antialiased`,
    backgroundColor: myTheme.colors.primary, // Utiliza el color asignado del tema aquí
  },
  ...(globalStyles as CSSObject),
  html: {
    minWidth: '100vw',
    overflowX: 'hidden',
  },
  video: {
    objectFit: 'cover',
  },
})

export default GlobalStyles
