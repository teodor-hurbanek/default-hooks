import { createContext } from 'react'

export type ColorScheme = 'dark' | 'light'

export const ThemeContext = createContext<ColorScheme>('light')
