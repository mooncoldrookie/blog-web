import React from 'react'
import styled from 'styled-components'
import { SearchDialog } from '@/components/Search'

const SearchWrapper = styled.div`
  width: fit-content;
  font-size: 28px;
  display: flex;
  align-items: center;
`

function DesktopSearchButton() {
  return (
    <SearchWrapper>
      <SearchDialog />
    </SearchWrapper>
  )
}

export default DesktopSearchButton
