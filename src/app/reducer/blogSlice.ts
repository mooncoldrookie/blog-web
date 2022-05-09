import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState } from '@/app/store'

const initialState = {
  postList: [],
  postPages: 0,
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<[]>) => {
      state.postList = action.payload
    },
    setPostPages: (state, action: PayloadAction<number>) => {
      state.postPages = action.payload
    },
  },
})

export const { setPostList } = blogSlice.actions
export const { setPostPages } = blogSlice.actions

export const selectPostList = (state: AppState) => state.blog.postList
export const selectPostPages = (state: AppState) => state.blog.postPages

export default blogSlice.reducer
