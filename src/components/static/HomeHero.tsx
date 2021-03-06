import { Typography } from '@material-tailwind/react'
import { AccordionMaker, Section } from '../../components'
import { useTheme } from 'next-themes'
interface HomeHeroProps {}

export const HomeHero: React.FC<HomeHeroProps> = () => {
  const { theme } = useTheme()
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
        {/** Section 1 */}
        {/** Dark */}
        <div
          className="hidden bg-center bg-no-repeat bg-contain dark:block"
          style={{
            backgroundImage: 'url(/images/darkMode-hero-1.svg)',
          }}
        />
        {/** Light */}
        <div
          className="bg-center bg-no-repeat bg-contain dark:hidden"
          style={{
            backgroundImage: 'url(/images/book-reading.jpeg)',
          }}
        />
      </Section>
    </>
  )
}
