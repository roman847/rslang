import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetWords, IWordsItem } from 'core/interfaces/dataModels'
import { getWords } from 'services/words'
import isServerError from 'core/functions/isServerError'

export enum GamePhase {
  preparation = 'preparation',
  loading = 'loading',
  inProcess = 'in process',
  results = 'results',
}

export interface ISprintState {
  gamePhase: GamePhase
  level: string
  words: IWordsItem[]
  rightAnswers: string[]
  wrongAnswers: IWordsItem[]
  score: number
  multiplexer: number
}

export const getWordsChunk = createAsyncThunk(
  'sprint/getWordsChunk',
  async ({ group }: IGetWords) => {
    let result: IWordsItem[] = []
    for (let i = 0; i < 3; i += 1) {
      const res = await getWords({ page: i.toString(), group })
      if (!isServerError(res)) {
        result = result.concat(res)
      }
    }
    return result
  },
)

const initialState: ISprintState = {
  level: '',
  gamePhase: GamePhase.preparation,
  words: [],
  rightAnswers: [],
  wrongAnswers: [],
  score: 0,
  multiplexer: 1,
}
export const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<string>) => {
      const levels = { A1: '0', A2: '1', B1: '2', B2: '3', C1: '4', C2: '5' }
      state.level = levels[action.payload as keyof typeof levels]
    },
    setGamePhase: (state, action: PayloadAction<GamePhase>) => {
      state.gamePhase = action.payload
    },
    addRightAnswer: (state, action) => {
      if (!state.rightAnswers.includes(action.payload)) state.rightAnswers.push(action.payload)
    },
    addWrongAnswer: (state, action) => {
      if (!state.wrongAnswers.includes(action.payload)) state.wrongAnswers.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWordsChunk.pending, (state) => {
      state.gamePhase = GamePhase.loading
    })
    builder.addCase(getWordsChunk.fulfilled, (state, action) => {
      if (!isServerError(action.payload)) {
        state.gamePhase = GamePhase.inProcess
        state.words.push(...action.payload)
      }
    })
  },
})

export const { setLevel, setGamePhase, addRightAnswer, addWrongAnswer } = sprintSlice.actions

export default sprintSlice.reducer
