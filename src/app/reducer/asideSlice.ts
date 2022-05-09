import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState } from '@/app/store'

const initialState = {
  recommendList: [],
  tagList: [],
  loading: false,
}

export const asideSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setRecommendList: (state, action: PayloadAction<any[]>) => {
      state.recommendList = action.payload
    },
    setTagList: (state, action: PayloadAction<any[]>) => {
      state.tagList = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setRecommendList } = asideSlice.actions
export const { setTagList } = asideSlice.actions
export const { setLoading } = asideSlice.actions

export const selectRecommendList = (state: AppState) =>
  state.aside.recommendList
export const selectTagList = (state: AppState) => state.aside.tagList
export const selectLoading = (state: AppState) => state.aside.loading

export default asideSlice.reducer
