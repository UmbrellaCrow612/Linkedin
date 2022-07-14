import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider as ComponentThemeProvider } from '@material-tailwind/react'
import { ThemeProvider as DarkModeThemeProvider } from 'next-themes'
import { GlobalLayout } from '../layouts'
import { LoadingSpinner } from '../components'
import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  // Set the hydration of dark and light mode

  // add defaultTheme="system" to the dark theme provider when you get to making dark theme
  useEffect(() => {
    setLoading(true)
  }, [])
  if (!loading) {
    return <LoadingSpinner />
  }
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <DarkModeThemeProvider attribute="class" defaultTheme="system">
        <ComponentThemeProvider>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </ComponentThemeProvider>
      </DarkModeThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
