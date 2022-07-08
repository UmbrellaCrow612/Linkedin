import { Button } from '@material-tailwind/react'
import { MobileMenu } from '../islands/MobileMenu'
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      {/** Mobile first */}
      <nav className="h-[80px] flex items-center px-4 justify-between">
        <MobileMenu />
        <div className="w-[200px] flex justify-between items-center">
          <Button variant="outlined">Sign up</Button>
          <Button variant="filled">Sign In</Button>
        </div>
      </nav>
    </>
  )
}
