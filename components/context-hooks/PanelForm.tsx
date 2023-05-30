import React from 'react'
import Input from '../UI/Input'

interface PanelFormProps {
  colorScheme: string
  onChangeRadio: (e: any) => void
}

const PanelForm = ({ colorScheme, onChangeRadio }: PanelFormProps) => {
  const handleChangeRadio = (e: any) => {
    onChangeRadio(e)
  }
  return (
    <form onChange={e => handleChangeRadio(e)}>
      <Input type={'radio'} name={'colorScheme'} value={'dark'} checked={colorScheme === 'dark'} />
      <label htmlFor="dark">Dark</label>
      <Input type={'radio'} name={'colorScheme'} value={'light'} checked={colorScheme === 'light'} />
      <label htmlFor="light">Light</label>
    </form>
  )
}

export default PanelForm
