import React, { useTransition } from 'react'
import Button from '../UI/Button'

interface TabButtonProps {
  children: string
  isActive: boolean
  onClick: any
}

const TabButton = ({ children, isActive, onClick }: TabButtonProps) => {
  const [isPending, startTransition] = useTransition()
  if (isActive) {
    return <b>{children}</b>
  }
  if (isPending) {
    return <em>{children}</em>
  }
  return (
    <Button
      onClick={() => {
        startTransition(() => {
          onClick()
        })
      }}
    >
      {children}
    </Button>
  )
}

export default TabButton
