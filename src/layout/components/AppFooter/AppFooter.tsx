import React from 'react'

import settings from '@/settings'
import { useAppSelector } from '@/app/hooks'

import {
  Footer,
  FooterCopyright,
  Greeting,
  Heart,
  InnerWrapper,
  Links,
  LinksWrapper,
  TitleLogo,
  TitleWrapper,
} from './styled'
import { selectConfigs } from '@/layout/AppLayoutSlice'

function AppFooter({ isDesktop }) {
  const present = 2021
  const fullYear = new Date().getFullYear()
  const date = fullYear > present ? `2021-${fullYear}` : '2021'
  const copyright = `© ${date} SunMoon. 保留所有权利.`
  const configs = useAppSelector(selectConfigs)

  return (
    <Footer>
      <InnerWrapper className="container-max-w" isDesktop={isDesktop}>
        <TitleWrapper className="bp3-monospace-text">
          <TitleLogo>{settings.title}</TitleLogo>
          <Greeting>
            {configs.footerGreeting}
            <Heart />
          </Greeting>
        </TitleWrapper>
        <LinksWrapper>
          <div>
            <div className="links-title">Create By</div>
            <Links>
              {settings.footerLinks.map((item) => (
                <a href={item.link} key={item.key}>
                  {item.key}
                </a>
              ))}
            </Links>
          </div>
        </LinksWrapper>
      </InnerWrapper>
      <FooterCopyright>{copyright}</FooterCopyright>
    </Footer>
  )
}

export default AppFooter
