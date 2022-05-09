import React from 'react'
import styled from 'styled-components'

import { SearchButton } from '@/components/Search'

const SearchWrapper = styled.div`
  width: fit-content;
  font-size: 28px;
  display: flex;
  align-items: center;
`

function DesktopSearchButton() {
  return (
    <SearchWrapper>
      <SearchButton />
    </SearchWrapper>
  )
}

export default DesktopSearchButton
