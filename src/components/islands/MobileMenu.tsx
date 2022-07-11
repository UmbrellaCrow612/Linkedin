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
          <IconButton variant='outlined'>
            <AiOutlineMenu className="text-2xl cursor-pointer dark:text-white" />
          </IconButton>
        </MenuHandler>
        <MenuList className="dark:bg-grey-800 dark:text-white">
          {options.map((option) => (
            <>
              <MenuItem key={option.title} className="flex items-center">
                <option.Icon className='mr-2 text-2xl'/>
                <Typography>{option.title}</Typography>
              </MenuItem>
            </>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}
