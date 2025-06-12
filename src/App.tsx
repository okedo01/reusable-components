import ActionBtn from './ActionBtn'
import './App.css'

const handleAdd = () => {
  alert("Added"); 
}

const handleDelete = () => {
  alert("Deleted"); 
}

const handleClear = () => {
  alert("Cleared"); 
}

function App() {

  return (
    <>
      <h1>Hello</h1>
      <ActionBtn handleAdd={handleAdd} handleDelete={handleDelete} handleClear={handleClear}/>
    </>
  )
}

export default App
