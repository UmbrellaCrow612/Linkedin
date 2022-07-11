/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { AccordionMaker } from '../components'
import { useTheme } from 'next-themes'
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
      {/** Two sections */}
      <main className="md:flex">
        {/** Section one */}
        <div className="px-2 md:w-[50%] md:flex flex-col items-center justify-center">
          <AccordionMaker Header="Search for a job" body="Hea" />
          <AccordionMaker Header="Find a person you know" body="Hea" />
          <AccordionMaker Header="Learn a new skill" body="Hea" />
        </div>
        {/** Section one ends*/}

        {/** Section two */}
        <div className="flex items-center justify-center p-2 h-[400px] md:h-[full] md:w-[50%]">
          {theme === 'light' ? (
            <>
              <img
                src="/images/book-reading.jpeg"
                alt="Person reading a book"
                loading="lazy"
                className="h-full"
              />
            </>
          ) : (
            <>
              <img
                src="/images/darkmode-book-reading.jpeg"
                alt="Person reading a book"
                loading="lazy"
                className="h-full"
              />
            </>
          )}
        </div>
        {/** Section two ends*/}
      </main>
    </>
  )
}

export default Home
