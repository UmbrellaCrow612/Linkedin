import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'
import { GlobalLayout } from '../layouts'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalLayout>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalLayout>
    </>
  )
}

export default MyApp
