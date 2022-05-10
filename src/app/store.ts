import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import appLayoutReducer from '@/layout/AppLayoutSlice'
import blogReducer from '@/app/reducer/blogSlice'
import momentSlice from '@/app/reducer/momentSlice'

const reducer = {
  appLayout: appLayoutReducer,
  blog: blogReducer,
  moment: momentSlice,
}

export function makeStore() {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
