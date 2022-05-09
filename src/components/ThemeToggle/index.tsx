import React from 'react'
import styled from 'styled-components'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { useMode, useToggleTheme } from '@/components/ThemeProvider'

const ThemeToggleButton = styled.span`
  display: flex;
  align-items: center;
  padding: 4px;

  .nav-item & {
    width: 100%;
  }
`

interface ThemeToggleProps extends React.HTMLAttributes<HTMLSpanElement> {}

function ThemeToggle(props: ThemeToggleProps) {
  const toggleMode = useToggleTheme()
  const mode = useMode()

  return (
    <ThemeToggleButton
      className="theme-toggle"
      onClick={() => toggleMode()}
      title="切换主题配色"
    >
      {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </ThemeToggleButton>
  )
}

export default React.memo(ThemeToggle)
