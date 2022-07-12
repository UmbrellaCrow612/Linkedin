import { Button, Typography } from '@material-tailwind/react'
import { Section } from './Section'
interface HomeSecondHeroProps {}

export const HomeSecondHero: React.FC<HomeSecondHeroProps> = () => {
  return (
    <Section customTailwind="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <div
        className="flex flex-col items-center justify-center text-center bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/images/second-hero-1.svg)' }}
      >
        <Typography
          variant="h2"
          className="bg-opacity-20 bg-grey-400 md:bg-opacity-0"
        >
          Connect with people who can help
        </Typography>
        <Button variant="gradient">Find people you know</Button>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/images/second-hero-2.svg)' }}
      >
        <Typography
          variant="h2"
          className="bg-opacity-20 bg-grey-400 md:bg-opacity-0"
        >
          Learn the skills you need to succeed
        </Typography>
        <Button>Choose a topic to learn about</Button>
      </div>
    </Section>
  )
}
