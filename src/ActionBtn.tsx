import React, { useContext } from 'react'
import { BtnContext } from './App';

const ActionBtn: React.FC = () => {
    const {handleAdd, handleDelete, handleClear} = useContext(BtnContext);
  return (
    <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default ActionBtn