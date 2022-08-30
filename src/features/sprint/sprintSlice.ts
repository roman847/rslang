import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum GamePhase {
  preparation = 'preparation',
  loading = 'loading',
  inProcess = 'in process',
  results = 'results',
}

export enum LanguageLevel {
  none = '-1',
  A1 = '0',
  A2 = '1',
  B1 = '2',
  B2 = '3',
  C1 = '4',
  C2 = '5',
}

export interface ISprintState {
  gamePhase: GamePhase
  level: string
}

const initialState: ISprintState = {
  level: LanguageLevel.none,
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
