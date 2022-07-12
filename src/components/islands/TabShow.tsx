import { Typography } from '@material-tailwind/react'

interface TabShowProps {
  title: string
  imageSrc: string
  body: string
}

export const TabShow: React.FC<TabShowProps> = ({ title, imageSrc, body }) => {
  return (
    <div className="grid h-full grid-cols-1 grid-rows-2 md:grid-rows-none md:grid-cols-2">
      <div className="flex flex-col items-center justify-center text-center">
        <Typography variant="h3">{title}</Typography>
        <Typography variant="paragraph">{body}</Typography>
      </div>
      <div
        className="bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    </div>
  )
}
