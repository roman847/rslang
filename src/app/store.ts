import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import textBookReducer from 'features/textBook/dictionary'
import counterReducer from 'features/counter/counterSlice'
import sprintReducer from 'features/sprint/sprintSlice'
import audioCallReducer from 'features/audioCall/audioCallSlice'
import generalReducer from 'features/general/generalSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    audioCall: audioCallReducer,
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
