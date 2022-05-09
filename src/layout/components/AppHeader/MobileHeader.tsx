import React, { memo } from 'react'
import styled from 'styled-components'

import DesktopSearchButton from '@/layout/components/AppHeader/DesktopSearchButton'

import Logo from './Logo'
import NavMenu from './NavMenu'

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${(p) => p.theme.mobileHeaderHeight};
  align-items: center;
  padding: 0 12px;
`

const MobileHeader = () => (
  <Header>
    <DesktopSearchButton />
    <Logo />
    <NavMenu />
  </Header>
)

export default memo(MobileHeader)
