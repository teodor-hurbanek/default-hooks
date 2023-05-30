import React, { useState } from 'react'
import Input from '../UI/Input'

const Form = () => {
  const [text, setText] = useState('Brian')

  const handleTextChange = (e: any) => {
    setText(e.target.value)
  }

  return (
    <form>
      <Input value={text} onChange={e => handleTextChange(e)} />
      <p>Hello, {text}.</p>
    </form>
  )
}

export default Form
