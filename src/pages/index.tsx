/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { Typography } from '@material-tailwind/react'
import { AccordionMaker, BlockTitleChips, Section } from '../components'
const Home: NextPage = () => {
  const BlockOneChips = [
    'See All Topic',
    'Remote',
    'Work from Home',
    'Retirement',
    'Internships',
    'Freelancer',
    'Salary and compensation',
    'Starting a job',
  ]
  const BlockTwoChips = [
    'Engineering',
    'Bushiness development',
    'Finance',
    'Administrative assistance',
    'Retail associate',
    'Customer Service',
    'Operations',
    'More',
  ]
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
      {/** accordion and hero image */}
      <Section customTailwind="grid grid-cols-1 grid-rows-2 px-2 py-1 gap-[2px] md:grid-cols-2 md:grid-rows-none">
        {/** Section 1 */}
        <div className="overflow-scroll text-center md:flex md:flex-col md:justify-center">
          {/** Mobile title */}
          <div className={`xl:hidden`}>
            <Typography variant="h4">
              Welcome to your professional community
            </Typography>
          </div>
          {/** Desktop title */}
          <div className={`hidden xl:block`}>
            <Typography variant="h2">
              Welcome to your professional community
            </Typography>
          </div>
          <AccordionMaker Header="Search for a Job" body="filler" />
          <AccordionMaker Header="Find a person you know" body="filler" />
          <AccordionMaker Header="Learn a new skill" body="filler" />
        </div>
        {/** Section 2 */}
        <div
          className="bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/images/book-reading.jpeg)' }}
        ></div>
      </Section>

      <BlockTitleChips
        title="Explore topics you are interested in"
        chipsArray={BlockOneChips}
        separate={ true}
      />
      <BlockTitleChips
        title="Find the right job or internship for you"
        chipsArray={BlockTwoChips}
      />
    </>
  )
}

export default Home
