import React, { useState } from 'react'

interface InputFieldsProps {
    type: string;
    placeholder: string;
}

const InputFields: React.FC<InputFieldsProps> = ({ type, placeholder}) => {
  const [ searchTerm, setSearchTerm ] = useState("");
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={(e) => setSearchTerm(e.target.value)}/>
        { searchTerm }
    </div>
  )
}

export default InputFields