import React, { createContext } from 'react'; 
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

export const BtnContext = React.createContext();

function App() {
  return (
    <>
      <h1>Hello</h1>
      {/* <ActionBtn handleAdd={handleAdd} handleDelete={handleDelete} handleClear={handleClear}/> */}
      <BtnContext.provider value={handleAdd, handleDelete, handleClear}>
        <ActionBtn />
      </BtnContext>
    </>
  )
}

export default App
