import React, { useEffect, useState } from "react";
import Image from 'next/image'
import cx from 'classnames'
import Avatar from '@mui/material/Avatar'
import { GetServerSideProps } from 'next/types'

import {
  AboutMePageWrap,
  ContentWrap,
  TopCard,
} from '@/components/pages/me/styled'
import profileBg from '@/assets/images/profileBg.jpg'
import avatar from '@/assets/images/defaultAvatar.jpeg'
import { useAppSelector } from '@/app/hooks'
import { selectIsDesktop, selectTheme } from '@/layout/AppLayoutSlice'
import settings from '@/settings'
import { getAbout } from '@/api/about'
import { setPageTitle } from '@/utils'
import { AppLayout } from '@/layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'

function MePage({ data }) {
  const isDesktop = useAppSelector(selectIsDesktop)
  const theme = useAppSelector(selectTheme)
  const [title,setTitle] = useState(()=>data.filter((item)=>item.key==="aboutTitle")[0])
  const [content,setContent] = useState(()=>data.filter((item)=>item.key==="aboutContent")[0])
  useEffect(() => {
    setPageTitle('关于我')
  }, [])

  useEffect(()=>{console.log(data)},[])

  return (
    <AppLayout>
      <AboutMePageWrap>
        <TopCard>
          <div className="picture-main">
            <Image
              src={profileBg}
              alt="profile background"
              layout="fill"
              className="profile-img"
              priority
            />
          </div>
          <div className={cx('profile-header', isDesktop ? '' : 'mobile')}>
            <div className="avatar-main">
              <Avatar
                src={settings.avatar && avatar}
                sx={{ width: 128, height: 128 }}
              />
            </div>
            <div className="info-main">
              <div className="info-main-item" />
              <div className="info-main-content info-main-item">
                <div className="info-name info-item">{settings.author}</div>
                <div className="info-intro info-item bp3-text-muted">
                  {settings.intro}
                </div>
              </div>
            </div>
          </div>
        </TopCard>
        <ContentWrap>
          <div className="title-main">
            <h3>{title.value}</h3>
          </div>
          <div className="about-main">
            <div className="about-content ">
              <MarkdownRenderer content={content.value} />
            </div>
          </div>
        </ContentWrap>
      </AboutMePageWrap>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getAbout()
  return {
    props: {
      data:res.data
    },
  }
}

export default MePage
