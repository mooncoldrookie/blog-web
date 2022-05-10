import styled from 'styled-components'
import React, { memo } from 'react'
import { useRouter } from 'next/router'
import { Link } from '@mui/material'

import { useAppSelector } from '@/app/hooks'
import { selectConfigs } from '@/layout/AppLayoutSlice'

const StyledLogo = styled.div`
  font-size: 28px;
  justify-self: center;
  color: inherit;

  a {
    color: inherit;
  }
`

function Logo() {
  const router = useRouter()
  const configs = useAppSelector(selectConfigs)
  return (
    <StyledLogo>
      <Link underline="none" onClick={() => router.push('/')}>
        {configs.siteName}
      </Link>
    </StyledLogo>
  )
}

export default memo(Logo)
