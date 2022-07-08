import { AiOutlineMenu } from 'react-icons/ai'
import { Button } from '@material-tailwind/react'
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      {/** Mobile first */}
      <nav className="h-[80px] flex items-center px-4 justify-between">
        <AiOutlineMenu className="text-2xl cursor-pointer" />
        <div className="w-[200px] flex justify-between items-center">
          <Button variant="outlined">Sign up</Button>
          <Button variant="filled">Sign In</Button>
        </div>
      </nav>
    </>
  )
}
