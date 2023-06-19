import { CSSObject, createGlobalStyle } from 'styled-components'
import tw, { globalStyles, theme } from 'twin.macro'

import React from 'react'

const myTheme = {
  colors: {
    primary: '#fdfbf5',
  },
}

const GlobalStyles = createGlobalStyle({
  ...(globalStyles as CSSObject),
  body: {
    /*     ...tw`antialiased`, */
    backgroundColor: myTheme.colors.primary,
    width: '100%',
    height: '3000px',
    margin: '0',
    /*  overflow: 'hidden', */
  },
  '#__next': {
    /*     display: 'flex',
    flexDirection: 'column', */
  },
  html: {
    minWidth: '100vw',
  },
  video: {
    objectFit: 'cover',
    height: '100%',
  },
  '#__next': {
    height: '2500px',
    width: '100vw',
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

/* const GlobalStyles = createGlobalStyle`

  body {
    background-color: white;
    height: 100vh;
    width: 100vw;
    margin: 0;
  }
  
  html {
      minWidth: '100vw',
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
  }
  video {
    object-fit: cover;
    height: 100%;
  }
  .bm-menu-wrap {
    left: 0px,
  }
  .bm-burger-button {
    z-index: 2010 !important,
  }

  '.bm-item': {
    zIndex: '10 !important',
  },
` */
