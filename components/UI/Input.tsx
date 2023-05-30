import React from 'react'

interface InputProps {
  id?: string
  type?: string
  placeholder?: string
  value: string
  name?: string
  checked?: boolean
  onChange?: (e: any) => void
}

const Input = ({ id, type = 'text', placeholder, value, name, checked, onChange }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  )
}

export default Input
