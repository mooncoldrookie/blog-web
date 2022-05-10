import React, { memo } from 'react'
import styled from 'styled-components'
import { Link } from '@mui/material'
import { useRouter } from 'next/router'

import settings from '@/settings'
import ThemeToggle from '@/components/ThemeToggle/'

import Logo from './Logo'
import { SearchDialog } from '@/components/Search'

const Header = styled.header`
  height: ${(p) => p.theme.desktopHeaderHeight};
  display: flex;
  align-items: center;
`
const Nav = styled.nav`
  display: flex;
  margin-left: 16px;
`
const Navbar = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 8px;
    font-size: 16px;
    margin-left: 12px;
  }
`
const SearchWrapper = styled.div`
  margin-left: 24px;

  .bp3-input:focus {
  }
`

const DesktopHeaderControl = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
`

const IconWrap = styled.div`
  display: inline-block;
  background-color: ${(p) => p.theme.colors.navControlsBg};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.navControlsBgHover};
  }

  & .theme-toggle {
    padding: 8px;
  }
`

const DesktopHeader = () => {
  const router = useRouter()
  return (
    <Header className="container-max-w">
      <Logo />
      <Nav>
        <Navbar>
          {settings.navItems.map((item) => (
            <a key={item.key} onClick={() => router.push(item.path)}>
              {item.name}
            </a>
          ))}
        </Navbar>
      </Nav>
      <SearchWrapper>
        <SearchDialog />
      </SearchWrapper>
      <DesktopHeaderControl>
        <IconWrap>
          <ThemeToggle />
        </IconWrap>
      </DesktopHeaderControl>
    </Header>
  )
}

export default memo(DesktopHeader)
