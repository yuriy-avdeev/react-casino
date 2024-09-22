import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../entities/posts/api/postApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [postApi.reducerPath]: postApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postApi.middleware),
})

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
