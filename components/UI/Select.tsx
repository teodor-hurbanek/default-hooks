import React from 'react'

interface SelectProps {
  data: string[]
  selectedValue: string
  onChange: (e: any) => void
}

const Select = ({ data, selectedValue, onChange }: SelectProps) => {
  const handleChange = (e: any) => {
    onChange(e)
  }

  return (
    <select value={selectedValue} onChange={e => handleChange(e)}>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}

export default Select
