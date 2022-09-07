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

export interface IAudioCallState {
  gamePhase: GamePhase
  level: string
  words: IWordsItem[]
  rightAnswers: IWordsItem[]
  wrongAnswers: IWordsItem[]
  score: number
  borderColor1: Color
  borderColor2: Color
  borderColor3: Color
  borderColor4: Color
  borderColor5: Color
  borderSize1: string
  borderSize2: string
  borderSize3: string
  borderSize4: string
  borderSize5: string
  borderStyle: string
  storeWord: string
  storeWordTranslate: string
  storeWordIndex: number
}

const initialState: IAudioCallState = {
  level: '',
  gamePhase: GamePhase.preparation,
  words: [],
  rightAnswers: [],
  wrongAnswers: [],
  score: 0,
  borderColor1: Color.blackText,
  borderColor2: Color.blackText,
  borderColor3: Color.blackText,
  borderColor4: Color.blackText,
  borderColor5: Color.blackText,
  borderSize1: '1px',
  borderSize2: '1px',
  borderSize3: '1px',
  borderSize4: '1px',
  borderSize5: '1px',
  borderStyle: 'solid',
  storeWord: '',
  storeWordTranslate: '',
  storeWordIndex: -1,
}

export const getWordsChunk = createAsyncThunk(
  'audioCall/getWordsChunk',
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

export const audioCallSlice = createSlice({
  name: 'audioCall',
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<string>) => {
      const levels = { A1: '0', A2: '1', B1: '2', B2: '3', C1: '4', C2: '5' }
      state.level = levels[action.payload as keyof typeof levels]
    },
    setGamePhase: (state, action: PayloadAction<GamePhase>) => {
      state.gamePhase = action.payload
    },
    updateStore: (state, action) => {
      const { word, wordTranslate, wordIndex } = action.payload
      state.borderColor1 = Color.blackText
      state.borderColor2 = Color.blackText
      state.borderColor3 = Color.blackText
      state.borderColor4 = Color.blackText
      state.borderColor5 = Color.blackText
      state.borderSize1 = '1px'
      state.borderSize2 = '1px'
      state.borderSize3 = '1px'
      state.borderSize4 = '1px'
      state.borderSize5 = '1px'
      state.storeWord = word
      state.storeWordTranslate = wordTranslate
      state.storeWordIndex = wordIndex
    },
    increaseScore: (state) => {
      state.score += 1
    },
    setBackgroundBorder1: (state, action) => {
      state.borderColor1 = action.payload
    },
    setBackgroundBorder2: (state, action) => {
      state.borderColor2 = action.payload
    },
    setBackgroundBorder3: (state, action) => {
      state.borderColor3 = action.payload
    },
    setBackgroundBorder4: (state, action) => {
      state.borderColor4 = action.payload
    },
    setBackgroundBorder5: (state, action) => {
      state.borderColor5 = action.payload
    },
    setSizeBorder1: (state, action) => {
      state.borderSize1 = action.payload
    },
    setSizeBorder2: (state, action) => {
      state.borderSize2 = action.payload
    },
    setSizeBorder3: (state, action) => {
      state.borderSize3 = action.payload
    },
    setSizeBorder4: (state, action) => {
      state.borderSize5 = action.payload
    },
    setSizeBorder5: (state, action) => {
      state.borderSize5 = action.payload
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
    prepareToContinue: (state) => {
      state.score = 0
      state.rightAnswers = []
      state.wrongAnswers = []
      state.storeWord = ''
      state.storeWordTranslate = ''
      state.storeWordIndex = -1
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
  updateStore,
  setBackgroundBorder1,
  setBackgroundBorder2,
  setBackgroundBorder3,
  setBackgroundBorder4,
  setBackgroundBorder5,
  setSizeBorder1,
  setSizeBorder2,
  setSizeBorder3,
  setSizeBorder4,
  setSizeBorder5,
  increaseScore,
  addRightAnswer,
  addWrongAnswer,
  prepareToContinue,
} = audioCallSlice.actions

export default audioCallSlice.reducer
