import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getAbout } from '@/api/about'

import { selectIsDesktop, setFooterGreeting, setSiteName } from "./AppLayoutSlice";
import AppFooter from './components/AppFooter/AppFooter'
import AppHeader from './components/AppHeader'
import { AppSide } from './components/AppSide'
import { HomeBanner } from './components/HomeBanner'
import {
  AppMainWrap,
  FrameMain,
  InnerMainWrap,
  MainFull,
  MainSide,
} from './Layout.styled'

function AppLayout({ children }) {
  const [isHome, setIsHome] = useState(false)
  const isDesktop = useAppSelector(selectIsDesktop)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    async function fetchSettings() {
      const result: any = await getAbout()
      if (result.code===0){
        const settings = result.data
        const siteName = settings.filter(item=>item.key==="siteName")[0].value
        const footerGreeting = settings.filter(item=>item.key==="footerGreeting")[0].value
        dispatch(setSiteName(siteName))
        dispatch(setFooterGreeting(footerGreeting))
      }
    }
    fetchSettings()
  },[])

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
