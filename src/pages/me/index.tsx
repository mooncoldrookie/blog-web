import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import Avatar from '@mui/material/Avatar'
import { GetServerSideProps } from 'next/types'

import { AboutMePageWrap, ContentWrap, TopCard } from '@/components/pages/me/styled'
import profileBg from '@/assets/images/profileBg.jpg'
import avatar from '@/assets/images/defaultAvatar.jpeg'
import { useAppSelector } from '@/app/hooks'
import { selectConfigs, selectIsDesktop } from '@/layout/AppLayoutSlice'
import { getConfigs } from '@/api/config'
import { setPageTitle } from '@/utils'
import { AppLayout } from '@/layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'

function MePage() {
  const isDesktop = useAppSelector(selectIsDesktop)
  const configs = useAppSelector(selectConfigs)
  useEffect(() => {
    setPageTitle('关于我')
  }, [])

  return (
    <AppLayout>
      <AboutMePageWrap>
        <TopCard>
          <div className="picture-main">
            <img
              src={configs.aboutBanner || profileBg}
              alt="profile background"
              className="profile-img"
            />
          </div>
          <div className={cx('profile-header', isDesktop ? '' : 'mobile')}>
            <div className="avatar-main">
              <Avatar src={configs.avatar || avatar} sx={{ width: 128, height: 128 }} />
            </div>
            <div className="info-main">
              <div className="info-main-item" />
              <div className="info-main-content info-main-item">
                <div className="info-name info-item">{configs.author}</div>
                <div className="info-intro info-item bp3-text-muted">{configs.intro}</div>
              </div>
            </div>
          </div>
        </TopCard>
        <ContentWrap>
          <div className="title-main">
            <h3>关于博客</h3>
          </div>
          <div className="about-main">
            <div className="about-content ">
              <MarkdownRenderer content={configs.description} />
            </div>
          </div>
        </ContentWrap>
      </AboutMePageWrap>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getConfigs()
  return {
    props: {
      data: res.data,
    },
  }
}

export default MePage
