import { useState } from 'react'
import './styles.css'
import { sections } from './_mockData.ts'

export default function AccordionSolution() {
  const [openSections, setOpenSections] = useState(new Set())

  // console.log(
  //   'jj ',
  //   ['accordion-icon', false && 'accordion-icon--rotated']
  //     .filter(Boolean)
  //     .join(' '),
  // )

  // const sss = new Set(['java', 'javascript'])
  // console.log('sss ', sss.has('javascript'))
  // console.log('openSections ', openSections)

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value)
        // console.log('openSections.has(value) ', openSections.has(value))

        return (
          <div className="accordion-item" key={value}>
            <button
              className="accordion-item-title"
              type="button"
              onClick={() => {
                const newOpenSections = new Set(openSections)
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value)
                setOpenSections(newOpenSections)
              }}
            >
              {title}
              <span
                aria-hidden={true}
                className={[
                  'accordion-icon',
                  isExpanded && 'accordion-icon--rotated',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
            </button>
            <div className="accordion-item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        )
      })}
    </div>
  )
}