import React, { type MouseEventHandler } from 'react'

interface ButtonProps {
    handleAdd: MouseEventHandler<HTMLButtonElement>;
    handleDelete: MouseEventHandler<HTMLButtonElement>;
    handleClear: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({handleAdd, handleDelete, handleClear}) => {
  return (
    <div>
        <ActionBtn handleAdd={handleAdd} handleDelete={handleDelete} handleClear={handleClear} />
    </div>
  )
}

export default Button