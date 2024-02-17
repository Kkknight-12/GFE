import { useState } from 'react'
import { sections } from './_mockData.js'

interface AccordionItemProps {
  id: string
  title: string
  contents: string
  isOpen: boolean | undefined
  onClick: (id: string) => void
}

const AccordionItem = ({
  id,
  title,
  contents,
  isOpen,
  onClick,
}: AccordionItemProps) => (
  <div onClick={() => onClick(id)}>
    <div>
      {title} <span aria-hidden={true} className="accordion-icon" />
    </div>
    <div hidden={!isOpen}>{contents}</div>
  </div>
)

export default function Accordion() {
  const [open, setOpen] = useState(
    sections.map((section) => ({ id: section.value, isOpen: false })),
  )

  const handleAccordionState = (id: string) => {
    setOpen((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    )
  }

  return (
    <div>
      {sections.map((section) => (
        <AccordionItem
          key={section.value}
          id={section.value}
          title={section.title}
          contents={section.contents}
          isOpen={open.find((item) => item.id === section.value)?.isOpen}
          onClick={handleAccordionState}
        />
      ))}
    </div>
  )
}