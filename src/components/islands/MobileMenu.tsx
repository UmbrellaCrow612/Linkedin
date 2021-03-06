import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react'
import { options } from '../static/Header'
import { AiOutlineMenu } from 'react-icons/ai'

interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  return (
    <>
      <Menu offset={7} placement="bottom-end">
        <MenuHandler className="md:hidden">
          <IconButton variant="outlined" className="">
            <AiOutlineMenu className="text-2xl cursor-pointer" />
          </IconButton>
        </MenuHandler>
        <MenuList className="w-[300px] h-[300px] flex flex-col justify-between dark:bg-[#121212] dark:border-grey-900 dark:text-white">
          {options.map((option) => (
            <>
              <MenuItem key={option.title} className="flex items-center">
                <option.Icon className="mr-2 text-2xl" />
                <Typography>{option.title}</Typography>
              </MenuItem>
            </>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}
