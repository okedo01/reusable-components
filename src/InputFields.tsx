import React from 'react'

interface InputFieldsProps {
    type: string;
    placeholder: string;
}

const InputFields: React.FC<InputFieldsProps> = ({ type, placeholder}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputFields