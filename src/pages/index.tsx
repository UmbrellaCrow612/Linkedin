/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { Typography } from '@material-tailwind/react'
const Home: NextPage = () => {
  const { theme } = useTheme()
  return (
    <>
      <Head>
        <title>LinkedIn: Log In or Sign Up</title>
        <meta
          name="description"
          content="750 million+ members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**  Grid approach */}

      {/** Title block */}
      <div className="h-[50px] flex items-center justify-center text-center">
        <Typography variant="h3">
          Welcome to your professional community
        </Typography>
      </div>
      {/** Title block ends*/}
    </>
  )
}

export default Home
