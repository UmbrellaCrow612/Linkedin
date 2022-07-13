import { Typography } from '@material-tailwind/react'
import { AccordionMaker, Section } from '../../components'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
interface HomeHeroProps {}

export const HomeHero: React.FC<HomeHeroProps> = () => {
  const { theme } = useTheme()
  const [darkHeroImage, setDarkHeroImage] = useState(false)
  useEffect(() => {
    if (theme === 'light') setDarkHeroImage(false)
    if (theme === 'dark') setDarkHeroImage(true)
  }, [theme])

  return (
    <>
      {/** accordion and hero image */}
      <Section customTailwind="grid grid-cols-1 grid-rows-2 px-2 py-1 gap-[2px] md:grid-cols-2 md:grid-rows-none">
        {/** Section 1 */}
        <div className="overflow-scroll text-center md:flex md:flex-col md:justify-center">
          {/** Mobile title */}
          <div className={`xl:hidden`}>
            <Typography variant="h4">
              Welcome to your professional community
            </Typography>
          </div>
          {/** Desktop title */}
          <div className={`hidden xl:block`}>
            <Typography variant="h2">
              Welcome to your professional community
            </Typography>
          </div>
          <AccordionMaker Header="Search for a Job" body="filler" />
          <AccordionMaker Header="Find a person you know" body="filler" />
          <AccordionMaker Header="Learn a new skill" body="filler" />
        </div>
        {/** Section 2 light and dark*/}
        {darkHeroImage ? (
     
            <div
              className="bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: 'url(/images/darkMode-hero-1.svg)',
              }}
            />
        
        ) : (
         
            <div
              className="bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: 'url(/images/book-reading.jpeg))',
              }}
            />
         
        )}
      </Section>
    </>
  )
}
