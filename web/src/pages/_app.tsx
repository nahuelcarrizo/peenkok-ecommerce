import '../config/fonts.css'
import '../styles/scroll.css'
import './smoothscroll.css'
import './boxes.css'

import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
