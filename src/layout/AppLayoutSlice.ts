import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState } from '@/app/store'
import settings from '@/settings'

export type Theme = 'light' | 'dark'

export type ConfigsType = {
  siteName: string
  author: string
  avatar: string
  desktopHomeBanner: string
  mobileHomeBanner: string
  footerGreeting: string
  aboutBanner: string
  intro: string
  description: string
}

export interface AppLayoutState {
  theme: Theme
  isDesktop: boolean
  configs: ConfigsType
}

const initialState: AppLayoutState = {
  theme: 'light',
  isDesktop: true,
  configs: {
    siteName: settings.siteName,
    author: settings.author,
    avatar: settings.avatar,
    desktopHomeBanner: settings.desktopHomeBanner,
    mobileHomeBanner: settings.mobileHomeBanner,
    footerGreeting: settings.footerGreeting,
    aboutBanner: settings.aboutBanner,
    intro: settings.intro,
    description: settings.description,
  },
}

export const appLayoutSlice = createSlice({
  name: 'appLayout',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
    toggleTheme: (state) => {
      if (state.theme === 'light') {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }
    },
    setIsDesktop: (state, action: PayloadAction<boolean>) => {
      state.isDesktop = action.payload
    },
    setConfigs: (state, action: PayloadAction<Partial<ConfigsType>>) => {
      state.configs = { ...state.configs, ...action.payload }
    },
  },
})

export const { setTheme } = appLayoutSlice.actions
export const { toggleTheme } = appLayoutSlice.actions
export const { setIsDesktop } = appLayoutSlice.actions
export const { setConfigs } = appLayoutSlice.actions

export const selectTheme = (state: AppState) => state.appLayout.theme
export const selectIsDesktop = (state: AppState) => state.appLayout.isDesktop
export const selectConfigs= (state: AppState):ConfigsType => state.appLayout.configs

export default appLayoutSlice.reducer
