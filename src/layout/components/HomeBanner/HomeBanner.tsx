import React, { memo, useEffect, useMemo, useRef, useState } from 'react'

import desktopBanner from '@/assets/images/desktopBanner1.jpg'
import mobileBanner from '@/assets/images/mobileBanner1.jpg'
import { useAppSelector } from '@/app/hooks'
import { selectConfigs, selectIsDesktop } from '@/layout/AppLayoutSlice'
import { getRandomInt } from '@/utils'

import { BannerImage, BannerWrap, TextWrap } from './HomeBanner.styled'

function HomeBanner() {
  const isDesktop = useAppSelector(selectIsDesktop)
  const configs = useAppSelector(selectConfigs)
  const titleRef = useRef<HTMLDivElement>(null)
  const [heartCount, setHeartCount] = useState(0)

  const styles = useMemo(() => {
    const arr = []
    for (let i = 0; i < heartCount; i++) {
      const size = getRandomInt(8, 16)
      arr.push({
        top: `${getRandomInt(20, 80)}%`,
        left: `${getRandomInt(0, 95)}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${getRandomInt(0, 30) / 10}s`,
      })
    }
    return arr
  }, [heartCount])

  useEffect(() => {
    setHeartCount(Math.floor((titleRef.current.clientWidth / 50) * 5))
  }, [heartCount])

  return (
    <BannerWrap>
      <BannerImage
        src={
          isDesktop
            ? configs.desktopHomeBanner || desktopBanner
            : configs.mobileHomeBanner || mobileBanner
        }
      />
      <TextWrap>
        <div className="banner-title" ref={titleRef}>
          SunMoon
          {styles.length &&
            styles.map((style, index) => <span className="particle" style={style} key={index} />)}
        </div>
      </TextWrap>
    </BannerWrap>
  )
}

export default memo(HomeBanner)
