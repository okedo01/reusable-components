import ActionBtn from './ActionBtn'
import './App.css'

const handleClick = () => {
  alert("clicked"); 
}

function App() {

  return (
    <>
      <h1>Hello</h1>
      <ActionBtn onClick={handleClick} className="btn" backgroundColor="green"/>
    </>
  )
}

export default App
