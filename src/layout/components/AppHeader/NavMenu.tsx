import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter } from 'next/router'
import Fade from '@mui/material/Fade'
import { useLocation } from 'react-use'

import settings from '@/settings'
import ThemeToggle from '@/components/ThemeToggle'

import { NavButton, NavMenuWrap, StyledItem, StyledMenu } from './styled'

function NavMenu() {
  const router = useRouter()
  const location = useLocation()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClickNav = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }
  const handleClickItem = (path) => {
    router.push(path)
    setAnchorEl(null)
  }

  useEffect(() => {
    setOpen(false)
  }, [router.pathname])
  return (
    <NavMenuWrap>
      <NavButton disableRipple onClick={handleClickNav}>
        <MenuIcon />
      </NavButton>
      <StyledMenu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorReference="anchorPosition"
        anchorPosition={{
          top: 60,
          left: 0,
        }}
        marginThreshold={0}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        TransitionComponent={Fade}
      >
        {settings.navItems.map((route) => (
          <StyledItem
            disableRipple
            key={route.key}
            onClick={() => handleClickItem(route.path)}
          >
            <a>{route.name}</a>
          </StyledItem>
        ))}
        <StyledItem className="nav-item" disableRipple>
          <ThemeToggle />
        </StyledItem>
      </StyledMenu>
    </NavMenuWrap>
  )
}

export default NavMenu
