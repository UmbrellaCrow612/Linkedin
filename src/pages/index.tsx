/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import {  BlockTitleChips, HomeHero, HomeSecondHero, HomeSlideTabs } from '../components'
const Home: NextPage = () => {
  const BlockOneChips = [
    'See All Topic',
    'Remote',
    'Work from Home',
    'Retirement',
    'Internships',
    "More"
  ]
  const BlockTwoChips = [
    'Engineering',
    'Bushiness development',
    'Finance',
    'More',
  ]
   const BlockThreeChips = [
     'Post a job',
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
      <HomeHero />
      <BlockTitleChips
        title="Explore topics you are interested in"
        chipsArray={BlockOneChips}
        separate={true}
      />
      <BlockTitleChips
        title="Find the right job or internship for you"
        chipsArray={BlockTwoChips}
        separate={true}
      />
      <BlockTitleChips
        title="Post your job for millions of people to see"
        chipsArray={BlockThreeChips}
      />
      <HomeSlideTabs />
      <HomeSecondHero />
    </>
  )
}

export default Home
