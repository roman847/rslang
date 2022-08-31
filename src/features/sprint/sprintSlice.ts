import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum GamePhase {
  preparation = 'preparation',
  loading = 'loading',
  inProcess = 'in process',
  results = 'results',
}

export interface ISprintState {
  gamePhase: GamePhase
  level: string
}

const initialState: ISprintState = {
  level: '',
  gamePhase: GamePhase.preparation,
}
export const sprintSlice = createSlice({
  name: 'sprint',
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

export const { setLevel, setGamePhase } = sprintSlice.actions

export default sprintSlice.reducer
