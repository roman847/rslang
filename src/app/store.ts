import * as reduxToolkit from '@reduxjs/toolkit'
import counterReducer from 'features/counter/counterSlice'

export const store = reduxToolkit.configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = reduxToolkit.ThunkAction<
  ReturnType,
  RootState,
  unknown,
  reduxToolkit.Action<string>
>
