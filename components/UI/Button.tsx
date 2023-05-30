import React from 'react'

interface ButtonProps {
  children: string
  disabled?: boolean
  style?: {}
  onClick: () => void
}

const Button = ({ children, disabled, style, onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
