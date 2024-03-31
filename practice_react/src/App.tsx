import './App.css'
import HOCComponent from './topics/hoc'
import { Page } from './topics/hoc/Page.tsx'

function App() {
  return (
    <>
      <HOCComponent />
      <Page />
    </>
  )
}

export default App