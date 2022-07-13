import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import { FooterLinks } from './FooterLinks'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const sectionOneLinks = [
    'Sign Up',
    'Help Center',
    'About',
    'Press',
    'Blog',
    'Careers',
    'Developers',
  ]
  const sectionTwoLinks = [
    'Learning',
    'Jobs',
    'Salary',
    'Mobile',
    'Services',
    'Products',
  ]
  const sectionThreeLinks = ['Talent', 'Marketing', 'Sales', 'Learning']
  const sectionFourLinks = [
    'Members',
    'Jobs',
    'Companies',
    'Featured',
    'Learning',
    'Posts',
    'Articles',
    'Schools',
    'News',
    'News Letters',
    'Services',
    'Products',
    'Content Topics',
  ]
  const subFooterLinks = [
    'About',
    'User Agreement',
    'Cookie Policy',
    'Brand Policy',
    'Community Guidelines',
    'Accessibility',
    'Privacy Policy',
    'Copyright Policy',
    'Guest Controls',
    'Languages',
  ]
  return (
    <>
      <footer className="flex flex-col items-center p-2 mx-auto max-w-screen-2xl md:flex-row md:h-[400px] md:justify-between">
        <div>
          <Image
            src="/images/logo.png"
            width={75}
            height={50}
            alt="Blue linkedin logo"
          />
        </div>
        <FooterLinks title="General" linksArray={sectionOneLinks} />
        <FooterLinks title="Browse LinkedIn" linksArray={sectionTwoLinks} />
        <FooterLinks
          title="Business Solutions"
          linksArray={sectionThreeLinks}
        />
        <FooterLinks title="Directories" linksArray={sectionFourLinks} />
      </footer>
      {/** Second sub footer */}
      <div className="h-[60px] max-w-screen-2xl mx-auto flex flex-col items-center">
        <div className="flex items-center w-[100px] justify-between">
          <Typography variant="small">Linkedin</Typography>
          <Typography variant="small">@ 2022</Typography>
        </div>

        <div className="flex flex-col items-center px-1 mt-2 text-center md:mt-o md:flex-row md:w-full md:justify-between">
          {subFooterLinks.map((item) => (
            <>
              <Typography variant="small">{item}</Typography>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
