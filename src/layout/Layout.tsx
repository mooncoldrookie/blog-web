import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getDevice } from '@/utils'

import { selectTheme, setIsDesktop } from './AppLayoutSlice'
import { LayoutContainer } from './Layout.styled'

function Layout({ children }) {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    function setDevice() {
      const width = document.documentElement.clientWidth
      const device = getDevice(width)
      if (device === 'desktop') {
        dispatch(setIsDesktop(true))
      } else {
        dispatch(setIsDesktop(false))
      }
    }

    setDevice()
    window.addEventListener('resize', setDevice)

    return () => {
      window.removeEventListener('resize', setDevice)
    }
  }, [dispatch])

  return <LayoutContainer id="layout-container">{children}</LayoutContainer>
}

export default Layout
