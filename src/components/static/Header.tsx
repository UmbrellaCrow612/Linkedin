import { Button, Typography } from '@material-tailwind/react'
import { MobileMenu } from '../islands/MobileMenu'
import { AiOutlineCompass } from 'react-icons/ai'
import { BsPeople, BsBook } from 'react-icons/bs'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
interface HeaderProps {}
const options = [
  {
    title: 'Discover',
    Icon: AiOutlineCompass,
  },
  {
    title: 'People',
    Icon: BsPeople,
  },
  {
    title: 'Learning',
    Icon: BsBook,
  },
  {
    title: 'Jobs',
    Icon: MdOutlineBusinessCenter,
  },
]
const Header: React.FC<HeaderProps> = () => {
  const router = useRouter()
  const [isFeedPage, setIsFeedPage] = useState(false)
  useEffect(() => {
    if (router.pathname === '/feed') setIsFeedPage(true)
  }, [router.pathname])

  return (
    <>
      {isFeedPage ? (
        <>Feed Header</>
      ) : (
        <nav className="h-[80px] rounded-xl z-10 dark:bg-[#1b1b1b] bg-white bg-opacity-70 flex items-center px-4 justify-between max-w-screen-2xl mx-auto sticky top-0">
          {/** Logo dark*/}
          <div className="hidden dark:md:block">
            <Image
              height={35}
              width={110}
              src="/images/darkMode-logo.png"
              alt="Linkedin blue logo"
            />
          </div>
          <div className="hidden dark:hidden md:block">
            <Image
              height={65}
              width={110}
              src="/images/logo.png"
              alt="Linkedin blue logo"
            />
          </div>
          {/** Mobile Menu */}
          <MobileMenu />
          {/** Desktop options */}
          <div className="flex items-center md:w-[500px] justify-between">
            {options.map((option) => (
              <div
                key={option.title}
                className="flex-col items-center justify-center hidden cursor-pointer hover:text-grey-700 md:flex"
              >
                <option.Icon className="text-2xl" />
                <Typography>{option.title}</Typography>
              </div>
            ))}
            <div className="w-[200px] flex justify-between items-center">
                <Button variant="outlined" onClick={() => signIn()}>Sign up</Button>
              <Button variant="filled"  onClick={() => signIn()}>Sign In</Button>
            </div>
          </div>
        </nav>
      )}
      {/** Home Header  */}

      {/** Feed Header show this based on url */}
    </>
  )
}

export { options, Header }
