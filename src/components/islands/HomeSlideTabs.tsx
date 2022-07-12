import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react'
import { Section } from '../static/Section'
import { TabShow } from './TabShow'

interface HomeSlideTabsProps {}

export const HomeSlideTabs: React.FC<HomeSlideTabsProps> = () => {
  const data = [
    {
      label: 'Open to work',
      value: 'Open to work',
      desc: `With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities`,
      imageSrc: '/images/tab-1.png',
    },
    {
      label: 'Opportunity',
      value: 'Opportunity',
      desc: `Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.`,
      imageSrc: '/images/tab-2.png',
    },

    {
      label: 'Up to date',
      value: 'Up to date',
      desc: 'From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.',
      imageSrc: '/images/tab-3.png',
    },
  ]
  return (
    <Section>
      <Tabs value="Open to work" className="h-full">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="h-full">
          {data.map(({ value, desc, imageSrc }) => (
            <TabPanel key={value} value={value} className="h-[425px]">
              <TabShow
                body={desc}
                title={value}
                imageSrc={imageSrc}
                key={value}
              />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Section>
  )
}
