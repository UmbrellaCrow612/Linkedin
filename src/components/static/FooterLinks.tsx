import { Typography } from '@material-tailwind/react'

interface FooterLinksProps {
  title: string
  linksArray: Array<String>
}

export const FooterLinks: React.FC<FooterLinksProps> = ({
  title,
  linksArray,
}) => {
  return (
    <div className='mb-4 md:mb-0'>
      <Typography variant="h5">{title}</Typography>
      <div className="flex flex-col items-center justify-between">
        {linksArray.map((item) => (
          <>
            <Typography variant="paragraph">{item}</Typography>
          </>
        ))}
      </div>
    </div>
  )
}
