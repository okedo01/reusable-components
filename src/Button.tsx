import React, { type MouseEventHandler } from 'react'
import ActionBtn from './ActionBtn';

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    className: string;
    color: string;
}

const Button: React.FC<ButtonProps> = ({onClick, className, color="red"}) => {
  return (
    <div>
        <ActionBtn onClick={onClick} backgroundColor={color} className={className}/>
    </div>
  )
}

export default Button