import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWords } from 'services/words'
import { IWordsItem } from 'core/interfaces/dataModels'

export interface IStore {
  textBook: IReducer
}

export interface IPage {
  number: string
}
export interface IGroup {
  number: string
}
export interface IOptions {
  page: string
  group: string
}
export interface IReducer {
  page: IPage
  group: IGroup
  words: IWordsItem[]
  learnedWords: IWordsItem[]
  focusWord: IWordsItem | null
  difficultWords: IWordsItem[]
}
export interface IDictionaryState extends IReducer {
  status: string | null
  error: string | null
}

export const fetchWords = createAsyncThunk<IWordsItem[], IOptions>(
  'textBook/fetchWords',
  async function ({ page, group }: IOptions) {
    const response = getWords({ page: page, group: group })
    return response
  },
)

const initialState: IDictionaryState = {
  page: {
    number: '0',
  },
  group: {
    number: '0',
  },
  focusWord: null,
  words: [],
  learnedWords: localStorage.getItem('save-words')
    ? Array.from(JSON.parse(localStorage.getItem('save-words') as string))
    : [],
  difficultWords: localStorage.getItem('difficult-words')
    ? Array.from(JSON.parse(localStorage.getItem('difficult-words') as string))
    : [],
  status: null,
  error: null,
}

const texBookSlice = createSlice({
  name: 'textBook',
  initialState,
  reducers: {
    setFocusWord(state, action) {
      state.focusWord = action.payload
    },
    setDifficultWords(state, action) {
      state.difficultWords = action.payload
    },
    setLearnedWords(state, action) {
      state.learnedWords = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload
        state.status = 'resolved'
      })
      .addCase(fetchWords.rejected, (state) => {
        state.status = 'rejected'
        throw new Error('Error')
      })
  },
})

export const { setFocusWord, setDifficultWords, setLearnedWords } = texBookSlice.actions
export default texBookSlice.reducer
