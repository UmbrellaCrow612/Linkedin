import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider as ComponentThemeProvider } from '@material-tailwind/react'
import { ThemeProvider as DarkModeThemeProvider } from 'next-themes'
import { GlobalLayout } from '../layouts'
import { LoadingSpinner } from '../components'
import { useEffect, useState } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  // Set the hydration of dark and light mode
  useEffect(() => {
    setLoading(true)
  }, [])
  if (!loading) {
    return <LoadingSpinner />
  }
  return (
    <DarkModeThemeProvider defaultTheme="system" attribute="class">
      <ComponentThemeProvider>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ComponentThemeProvider>
    </DarkModeThemeProvider>
  )
}

export default MyApp
