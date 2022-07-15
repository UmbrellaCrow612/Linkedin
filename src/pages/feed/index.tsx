import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
const FeedHomePage: NextPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    router.push('/')
    return <p>Need to be authenticated sending you home</p>
  }

  return (
    <>
      <Head>
        <title>Feed | Linkedin</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="Feed" />
      </Head>
      {session ? <>You are signed in so here is your feed</> : <></>}
    </>
  )
}
export default FeedHomePage
