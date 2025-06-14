import './App.css'
import Headings from './Headings'
import InputFields from './InputFields'
import Results from './Results'

interface searchTermProps {
  searchTerm: any;
  setSearchTerm: (value: string) => void;
}

function App() {
  const [ searchTerm, setSearchTerm ] = useState<searchTermProps>("");
  return (
    <>
      <h1>English Premier League</h1>
      <Headings name="React Reusable Components" />
      <InputFields type="text" placeholder="Enter your name" searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <InputFields type="number" placeholder="Enter year number" searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Headings name="Input Fields Results" />
      <Results />
    </>
  )
}

export default App
