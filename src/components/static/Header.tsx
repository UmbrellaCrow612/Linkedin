import { Button, Typography } from '@material-tailwind/react'
import { MobileMenu } from '../islands/MobileMenu'
import { AiOutlineCompass } from 'react-icons/ai'
import { BsPeople, BsBook } from 'react-icons/bs'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import Image from 'next/image'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
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
  return (
    <>
      <nav className="h-[80px] flex items-center px-4 justify-between">
        {/** Mobile Menu */}
        <MobileMenu />
        {/** Logo */}
        <div className="hidden md:block">
          <Image
            height={65}
            width={110}
            src="/images/logo.png"
            alt="Linkedin blue logo"
          />
        </div>

        {/** Desktop options */}
        <div className="flex items-center md:w-[500px] justify-between">
          {options.map((option) => (
            <div
              key={option.title}
              className="flex-col items-center justify-center hover:text-grey-700 cursor-pointer hidden md:flex"
            >
              <option.Icon className="text-2xl" />
              <Typography>{option.title}</Typography>
            </div>
          ))}
          <div className="w-[200px] flex justify-between items-center">
            <Button variant="outlined">Sign up</Button>
            <Button variant="filled">Sign In</Button>
          </div>
        </div>
      </nav>
    </>
  )
}
