import React from 'react'
import Button from '../UI/Button'
import useOnlineStatus from '@/hooks/useOnlineStatus'

const SaveButton = () => {
  const isOnline = useOnlineStatus()

  const handleSave = () => {
    console.log('✅ Progress saved')
  }
  return (
    <Button disabled={!isOnline} onClick={handleSave}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </Button>
  )
}

export default SaveButton
