import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetWords, IWordsItem } from 'core/interfaces/dataModels'
import { getWords } from '../../services/words'
import isServerError from '../../core/functions/isServerError'

export enum GamePhase {
  preparation = 'preparation',
  loading = 'loading',
  inProcess = 'in process',
  results = 'results',
}

export enum LanguageLevel {
  none = '',
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
  words: IWordsItem[]
}

export const getWordsChunk = createAsyncThunk(
  'sprint/getWordsChunk',
  async ({ page, group }: IGetWords) => {
    const response = await getWords({ page, group })
    console.log(response)
    return response
  },
)

const initialState: ISprintState = {
  level: LanguageLevel.none,
  gamePhase: GamePhase.preparation,
  words: [],
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
  extraReducers: (builder) => {
    builder.addCase(getWordsChunk.pending, (state) => {
      console.log('loading')
      state.gamePhase = GamePhase.loading
    })
    builder.addCase(getWordsChunk.fulfilled, (state, action) => {
      if (!isServerError(action.payload)) {
        state.gamePhase = GamePhase.inProcess
        console.log(action.payload)
        state.words = action.payload
      }
    })
  },
})

export const { setLevel, setGamePhase } = sprintSlice.actions

export default sprintSlice.reducer
