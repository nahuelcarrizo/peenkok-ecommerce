import { CSSObject, createGlobalStyle } from 'styled-components'
import tw, { globalStyles, theme } from 'twin.macro'

import React from 'react'

const myTheme = {
  colors: {
    primary: '#fdfbf5',
  },
}

const GlobalStyles = createGlobalStyle({
  body: {
    ...tw`antialiased`,
    backgroundColor: myTheme.colors.primary,
  },
  ...(globalStyles as CSSObject),
  html: {
    minWidth: '100vw',
    overflowX: 'hidden',
  },
  video: {
    objectFit: 'cover',
    height: '100%',
  },
  '.bm-menu-wrap': {
    left: '0px',
  },
  /*
  '.bm-burger-button': {
    zIndex: '2010 !important',
  },
  '.bm-item': {
    zIndex: '10 !important',
  }, */
})

export default GlobalStyles
