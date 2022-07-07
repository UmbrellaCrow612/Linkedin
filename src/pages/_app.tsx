import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider as ComponentThemeProvider } from '@material-tailwind/react'
import { ThemeProvider as DarkModeThemeProvider } from 'next-themes'
import { GlobalLayout } from '../layouts'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeThemeProvider defaultTheme="system" attribute="class" >
      <ComponentThemeProvider>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ComponentThemeProvider>
    </DarkModeThemeProvider>
  )
}

export default MyApp
