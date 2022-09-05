import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetWords, IWordsItem } from 'core/interfaces/dataModels'
import { getWords } from 'services/words'
import isServerError from 'core/functions/isServerError'
import { Color } from 'core/variables/constants'

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
  rightAnswers: IWordsItem[]
  wrongAnswers: IWordsItem[]
  score: number
  multiplier: number
  winStreak: number
  background: Color
  storeWord: string
  storeWordTranslate: string
  storeWordIndex: number
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
  multiplier: 1,
  winStreak: 0,
  background: Color.none,
  storeWord: '',
  storeWordTranslate: '',
  storeWordIndex: -1,
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
    addRightAnswer: (state, action: PayloadAction<IWordsItem>) => {
      if (!state.rightAnswers.find((item) => item.id === action.payload.id)) {
        state.rightAnswers.push(action.payload)
      }
    },
    addWrongAnswer: (state, action) => {
      if (!state.wrongAnswers.find((item) => item.id === action.payload.id)) {
        state.wrongAnswers.push(action.payload)
      }
    },
    setBackground: (state, action) => {
      state.background = action.payload
    },
    updateStore: (state, action) => {
      const { word, wordTranslate, wordIndex } = action.payload
      state.background = Color.none
      state.storeWord = word
      state.storeWordTranslate = wordTranslate
      state.storeWordIndex = wordIndex
    },
    increaseScore: (state) => {
      state.score += state.multiplier * 10
      if (state.winStreak >= 3) {
        state.winStreak = 0
        state.multiplier += 1
      } else {
        state.winStreak += 1
      }
    },
    resetWinStreak: (state) => {
      state.winStreak = 0
      state.multiplier = 1
    },
    prepareToContinue: (state) => {
      state.score = 0
      state.winStreak = 0
      state.multiplier = 1
      state.rightAnswers = []
      state.wrongAnswers = []
      state.storeWord = ''
      state.storeWordTranslate = ''
      state.storeWordIndex = -1
    },
    exitTheGame: (state) => {
      state.words = []
      state.level = ''
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

export const {
  setLevel,
  setGamePhase,
  addRightAnswer,
  addWrongAnswer,
  setBackground,
  updateStore,
  increaseScore,
  resetWinStreak,
  prepareToContinue,
  exitTheGame,
} = sprintSlice.actions

export default sprintSlice.reducer
