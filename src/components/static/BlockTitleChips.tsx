import { Button, Typography } from '@material-tailwind/react'
import { Section } from './Section'

interface BlockTitleChipsProps {
  title: string
  chipsArray: Array<string>
}

export const BlockTitleChips: React.FC<BlockTitleChipsProps> = ({
  title,
  chipsArray,
}) => {
  return (
    <>
      <Section customTailwind="grid grid-cols-1 grid-rows-2 md:grid-rows-none md:grid-cols-2">
        {/** Section 1 */}
        <div className="flex items-center justify-center text-center text-grey-700">
          <Typography variant="h2">{title}</Typography>
        </div>
        {/** Section 2 chips */}
        <div className="flex flex-wrap items-center justify-around overflow-scroll">
          {chipsArray.map((chip) => (
            <>
              <Button key={chip} variant="outlined">
                <Typography variant="paragraph">{chip}</Typography>
              </Button>
            </>
          ))}
        </div>
      </Section>
    </>
  )
}
