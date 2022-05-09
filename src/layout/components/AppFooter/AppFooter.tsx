import React from 'react'

import settings from '@/settings'
import { useAppSelector } from "@/app/hooks";
import { selectFooterGreeting } from "@/layout/AppLayoutSlice";

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

function AppFooter({ isDesktop }) {
  const footerGreeting = useAppSelector(selectFooterGreeting)
  const present = 2021
  const fullYear = new Date().getFullYear()
  const date = fullYear > present ? `2021-${fullYear}` : '2021'
  const copyright = `© ${date} SunMoon. 保留所有权利.`

  return (
    <Footer>
      <InnerWrapper className="container-max-w" isDesktop={isDesktop}>
        <TitleWrapper className="bp3-monospace-text">
          <TitleLogo>{settings.title}</TitleLogo>
          <Greeting>
            {footerGreeting}
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
