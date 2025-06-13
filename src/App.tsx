import './App.css'
import Headings from './Headings'
import InputFields from './InputFields'
import Results from './Results'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Headings name="React Reusable Components" />
      <InputFields type="text" placeholder="Enter your name"/>
      <InputFields type="number" placeholder="Enter year number"/>
      <Headings name="Input Fields Results" />
      <Results />
    </>
  )
}

export default App
