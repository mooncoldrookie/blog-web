import React from 'react'
import styled from 'styled-components'

import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const AppHeaderWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${(p) => p.theme.colors.card};
`

function AppHeader({ isDesktop }) {
  return (
    <AppHeaderWrap>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </AppHeaderWrap>
  )
}

export default AppHeader
