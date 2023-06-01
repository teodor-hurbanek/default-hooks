import React from 'react'

interface LabelProps {
  htmlFor: string
  children: string
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>
}

export default Label
