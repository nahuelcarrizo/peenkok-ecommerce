import { CSSObject, createGlobalStyle } from 'styled-components'
import tw, { globalStyles, theme } from 'twin.macro'

import React from 'react'

const myTheme = {
  colors: {
    white: '#fff',
    primary: '#fff',
  },
}

const GlobalStyles = createGlobalStyle({
  ...(globalStyles as CSSObject),

  body: {
    /*     ...tw`antialiased`, */
    backgroundColor: myTheme.colors.white,
    width: '100%',
    height: '3000px',
    margin: '0',
    overscrollBehavior: 'none',
  },
  html: {
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  video: {
    objectFit: 'cover',
    height: '100%',
  },
  '.bm-menu-wrap': {
    left: '0px',
  },
  '.bm-burger-button': {
    zIndex: '2010 !important',
  },
  '.scrollbar-track.show': {
    opacity: '0 !important',
  },

  /*
  '.bm-item': {
    zIndex: '10 !important',
  }, */
})

export default GlobalStyles
