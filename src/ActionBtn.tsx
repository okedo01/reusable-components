import React, { type MouseEventHandler } from 'react'

interface ActionBtnProps {
    handleAdd: MouseEventHandler<HTMLButtonElement>;
    handleDelete: MouseEventHandler<HTMLButtonElement>;
    handleClear: MouseEventHandler<HTMLButtonElement>;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ handleAdd, handleDelete, handleClear }) => {
  return (
    <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default ActionBtn