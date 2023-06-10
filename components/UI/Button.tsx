import React from 'react'

interface ButtonProps {
  children: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  style?: {}
  onClick?: () => void
}

const Button = ({ children, disabled, type, style, onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} type={type} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
