import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum GamePhase {
  preparation = 'preparation',
  loading = 'loading',
  inProcess = 'in process',
  results = 'results',
}

export interface IAudioCallState {
  gamePhase: GamePhase
  level: string
}

const initialState: IAudioCallState = {
  gamePhase: GamePhase.preparation,
  level: '',
}
export const IAudioCallState = createSlice({
  name: 'audioCall',
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload
    },
    setGamePhase: (state, action: PayloadAction<GamePhase>) => {
      state.gamePhase = action.payload
    },
  },
})

export const { setLevel, setGamePhase } = IAudioCallState.actions

export default IAudioCallState.reducer
