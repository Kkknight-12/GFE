import AccordionSolution from '../../components/Accordion/AccSolution.tsx'
import { ProgressBar2 } from '../../components/ProgressBar2/index.js'
import Solution from '../../components/ProgressBar2/Solution.js'
import Accordion from '../../components/Accordion/'

function EasyComponents() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* <ProgressBar completion={"20%"} /> */}
      {/* <ProgressBar completion={"50%"} /> */}
      {/* <ProgressBar completion={"100%"} /> */}
      {/* <Dropdown /> */}
      <ProgressBar2 completion={'70%'} />
      <Solution />
      <Accordion />
      <AccordionSolution />
    </div>
  )
}

export default EasyComponents