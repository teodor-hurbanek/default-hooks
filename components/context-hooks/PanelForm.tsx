import React from 'react'
import Input from '../UI/Input'
import Label from '../UI/Label'

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
      <Label htmlFor={'dark'}>Dark</Label>
      <Input type={'radio'} name={'colorScheme'} value={'light'} checked={colorScheme === 'light'} />
      <Label htmlFor={'light'}>Light</Label>
    </form>
  )
}

export default PanelForm
