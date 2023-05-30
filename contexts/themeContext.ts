import { createContext } from 'react'

export type ColorScheme = 'dark' | 'light'

const ThemeContext = createContext<ColorScheme>('light')

export default ThemeContext
