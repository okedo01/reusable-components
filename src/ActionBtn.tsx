import React, { type MouseEventHandler } from 'react'

interface ActionBtnProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    className: string;
    backgroundColor: string;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ onClick, className, backgroundColor}) => {
  return (
    <div>
        <button onClick={onClick}>Add</button>
        <button className={className}>Delete</button>
        <button style={{backgroundColor}}>Clear</button>
    </div>
  )
}

export default ActionBtn