import { configureStore } from '@reduxjs/toolkit'
import setPageReducer from './audioCallSlice'

const store = configureStore({
  reducer: {
    audioCall: setPageReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
