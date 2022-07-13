import { Button, Typography } from '@material-tailwind/react'
import { Section } from './Section'

interface BlockTitleChipsProps {
  title: string
  chipsArray: Array<string>
  separate?: boolean
}

export const BlockTitleChips: React.FC<BlockTitleChipsProps> = ({
  title,
  chipsArray,
  separate,
}) => {
  return (
    <>
      <Section
        customTailwind={`grid grid-cols-1 grid-rows-2 md:grid-rows-none md:grid-cols-2 ${
          separate ? 'border-b-[0.5px] border-grey-300' : ''
        }`}
      >
        {/** Section 1 */}
        <div className="flex items-center justify-center text-center text-grey-700 dark:text-white">
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
