import './App.css'
import Headings from './Headings'
import InputFields from './InputFields'
import Results from './Results'

interface searchTermProps {
  searchTerm: any;
  setSearchTerm: () => void;
}

function App() {
  const [ searchTerm, setSearchTerm ] = useState<searchTermProps>("");
  return (
    <>
      <h1>English Premier League</h1>
      <Headings name="React Reusable Components" />
      <InputFields type="text" placeholder="Enter your name" searchTerm={searchTerm} searcTermFunc={setSearchTerm}/>
      <InputFields type="number" placeholder="Enter year number"/>
      <Headings name="Input Fields Results" />
      <Results />
    </>
  )
}

export default App
