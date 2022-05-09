import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import appLayoutReducer from '@/layout/AppLayoutSlice'
import blogReducer from '@/app/reducer/blogSlice'
import momentSlice from '@/app/reducer/momentSlice'
import asideSlice from '@/app/reducer/asideSlice'

const reducer = {
  appLayout: appLayoutReducer,
  blog: blogReducer,
  moment: momentSlice,
  aside: asideSlice,
}

export function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
