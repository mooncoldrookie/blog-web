import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getConfigs } from '@/api/config'

import { selectIsDesktop, setConfigs } from './AppLayoutSlice'
import AppFooter from './components/AppFooter/AppFooter'
import AppHeader from './components/AppHeader'
import { AppSide } from './components/AppSide'
import { HomeBanner } from './components/HomeBanner'
import { AppMainWrap, FrameMain, InnerMainWrap, MainFull, MainSide } from './Layout.styled'
import { recordAccess } from '@/api/base'

function AppLayout({ children }) {
  const [isHome, setIsHome] = useState(false)
  const isDesktop = useAppSelector(selectIsDesktop)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    async function fetchSettings() {
      try {
        const result = await getConfigs()
        if (result.success) {
          const configs = result.data
          dispatch(setConfigs(configs))
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetchSettings()
  }, [])

  useEffect(() => {
    setIsHome(asPath === '/')
  }, [asPath])

  return (
    <>
      <AppHeader isDesktop={isDesktop} />
      <FrameMain>
        {isHome && <HomeBanner />}
        <AppMainWrap className="content-max-w">
          <MainFull>
            <InnerMainWrap>{children}</InnerMainWrap>
          </MainFull>
          {isDesktop ? (
            <MainSide>
              <AppSide />
            </MainSide>
          ) : (
            ''
          )}
        </AppMainWrap>
        <div />
      </FrameMain>
      <AppFooter isDesktop={isDesktop} />
    </>
  )
}

export default AppLayout
