import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '@/utils/theme'

const ThemeContext = createContext<undefined | (() => void)>(undefined)
const ModeContext = createContext<undefined | string>(undefined)

export const useToggleTheme = () => useContext(ThemeContext)
export const useMode = () => useContext(ModeContext)

const MyThemeProvider = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  const [theme, setTheme] = useState(lightTheme)
  const [mode, setMode] = useState(lightTheme.mode)
  const toggleMode = useCallback(() => {
    setTheme(({ mode }) => {
      const newMode = mode === 'dark' ? lightTheme : darkTheme
      localStorage.setItem('MODE', newMode.mode)
      setMode(mode)
      return newMode
    })
  }, [])

  useEffect(() => {
    const oldMode = localStorage.getItem('MODE')
    if (oldMode && oldMode !== theme.mode) {
      toggleMode()
    }
  }, [theme.mode, toggleMode])

  return (
    <ThemeContext.Provider value={toggleMode}>
      <ModeContext.Provider value={mode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ModeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default MyThemeProvider
