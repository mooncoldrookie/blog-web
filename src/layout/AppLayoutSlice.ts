import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState } from '@/app/store'
import settings from "@/settings";

export type Theme = 'light' | 'dark'

export interface AppLayoutState {
  theme: Theme
  isDesktop: boolean,
  siteName:string,
  footerGreeting:string
}

const initialState: AppLayoutState = {
  theme: 'light',
  isDesktop: true,
  siteName: settings.title,
  footerGreeting:settings.footerGreeting
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
    setSiteName:(state,action:PayloadAction<string>)=>{
      if (action.payload==="")return
      state.siteName=action.payload
    },
    setFooterGreeting:(state,action:PayloadAction<string>)=>{
      if (action.payload==="")return
      state.footerGreeting=action.payload
    },
  },
})

export const { setTheme } = appLayoutSlice.actions
export const { toggleTheme } = appLayoutSlice.actions
export const { setIsDesktop } = appLayoutSlice.actions
export const { setSiteName } = appLayoutSlice.actions
export const { setFooterGreeting } = appLayoutSlice.actions

export const selectTheme = (state: AppState) => state.appLayout.theme
export const selectIsDesktop = (state: AppState) => state.appLayout.isDesktop
export const selectSiteName = (state: AppState) => state.appLayout.siteName
export const selectFooterGreeting = (state: AppState) => state.appLayout.footerGreeting

export default appLayoutSlice.reducer
