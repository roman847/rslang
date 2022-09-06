import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import sprintReducer from 'features/sprint/sprintSlice'
import textBookReducer from 'redux/textBook/dictionary'
import counterReducer from 'features/counter/counterSlice'
import generalReducer from 'features/general/generalSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sprint: sprintReducer,
    textBook: textBookReducer,
    general: generalReducer,
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
