import { AiOutlineMenu } from 'react-icons/ai'

interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  return (
    <>
      <AiOutlineMenu className="text-2xl cursor-pointer md:hidden" />
    </>
  )
}
