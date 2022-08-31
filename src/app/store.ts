import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from 'features/counter/counterSlice'
import audioCallReducer from '../features/audioCall/audioCallSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    audioCall: audioCallReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
