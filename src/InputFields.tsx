import React, { useState } from 'react'

interface InputFieldsProps {
    type: string;
    placeholder: string;
    searchTerm: any;
    setSearchTerm: () => void;
}

const InputFields: React.FC<InputFieldsProps> = ({ type, placeholder}) => {
  
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={(e) => setSearchTerm(e.target.value)}/>
        { searchTerm }
    </div>
  )
}

export default InputFields