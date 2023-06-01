import React, { useContext } from 'react'
import Button from '../UI/Button'
import { ThemeContext } from '@/contexts/themeContext'
import styles from '@/app/context-hooks/page.module.css'

const Panel = () => {
  const theme = useContext(ThemeContext)
  const isDark = theme === 'dark'

  const getButtonColorScheme = () => {
    return isDark
      ? { background: 'rgb(50, 50, 50)', color: '#fff' }
      : { background: 'rgb(200, 200, 200)', color: '#000' }
  }

  return (
    <div className={styles.panel} style={getButtonColorScheme()}>
      <h1>Welcome on board.</h1>
      <div>
        <Button onClick={() => console.log('Signed in.')}>Sign up</Button>
        <Button onClick={() => console.log('Logged in.')}>Log in</Button>
      </div>
    </div>
  )
}

export default Panel
