import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import { useState } from 'react'

interface AccordionProps {
  Header: string
  body: string
}

export const AccordionMaker: React.FC<AccordionProps> = ({ Header, body }) => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value:number) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>{Header}</AccordionHeader>
        <AccordionBody>{body}</AccordionBody>
      </Accordion>
    </>
  )
}
