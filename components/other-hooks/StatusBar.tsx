import useOnlineStatus from '@/hooks/useOnlineStatus'
import React from 'react'

const StatusBar = () => {
  const isOnline = useOnlineStatus()
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
}

export default StatusBar
