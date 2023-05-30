'use client'
import ThemeContext, { ColorScheme } from '@/contexts/themeContext'
import styles from './page.module.css'
import Panel from '@/components/context-hooks/Panel'
import { useState } from 'react'
import Input from '@/components/UI/Input'
import PanelForm from '@/components/context-hooks/PanelForm'

export default function Context() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')

  const handleChangeRadio = (e: any) => {
    setColorScheme(e.target.value)
  }
  return (
    <>
      <section>
        <h2>Context Hooks</h2>
        <p>
          Context lets a component receive information from distant parents without passing it as props. For example,
          your app’s top-level component can pass the current UI theme to all components below, no matter how deep.
        </p>
      </section>

      <section>
        <h3>useContext</h3>
        <p>useContext is a React Hook that lets you read and subscribe to context from your component.</p>
        <p>
          useContext() always looks for the closest provider above the component that calls it. It searches upwards and
          does not consider providers in the component from which you’re calling useContext().
        </p>
      </section>

      <section className={styles.panelSection}>
        <p>Select your preffered color scheme</p>
        <PanelForm colorScheme={colorScheme} onChangeRadio={handleChangeRadio} />
        <ThemeContext.Provider value={colorScheme}>
          <Panel />
        </ThemeContext.Provider>
      </section>
    </>
  )
}
