import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState } from '@/app/store'

const initialState = {
  likeIds: [],
}

export const momentSlice = createSlice({
  name: 'moment',
  initialState,
  reducers: {
    setLikeIds: (state, action: PayloadAction<[]>) => {
      state.likeIds = action.payload
    },
    addLikeId: (state, action: PayloadAction<number>) => {
      state.likeIds.push(action.payload)
    },
  },
})

export const { setLikeIds } = momentSlice.actions
export const { addLikeId } = momentSlice.actions

export const selectLikeIds = (state: AppState) => state.moment.likeIds

export default momentSlice.reducer
