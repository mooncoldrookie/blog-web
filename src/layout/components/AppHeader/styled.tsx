import styled from 'styled-components'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ButtonBase from '@mui/material/ButtonBase'

export const NavMenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  font-size: 28px;
  height: 100%;
`

export const NavButton = styled(ButtonBase)`
  height: 100%;
`

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    border-radius: 0;
  }

  .MuiMenu-paper {
    width: 100%;
    max-width: 100%;
    color: ${(p) => p.theme.colors.text};
    background-color: ${(p) => p.theme.colors.card};
  }
`

export const StyledItem = styled(MenuItem)`
  font-size: 16px;
  letter-spacing: 8px;
  cursor: pointer;

  .MuiTypography-root {
    color: ${(p) => p.theme.colors.text};
  }
`
