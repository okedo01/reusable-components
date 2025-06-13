import React from 'react'

interface HeadingsProps {
    name: string;
}

const Headings: React.FC<HeadingsProps> = ({ name }) => {
  return (
    <div>{ name }</div>
  )
}

export default Headings