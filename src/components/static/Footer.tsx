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
    </>
  )
}
