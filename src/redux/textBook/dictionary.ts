import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWords } from 'services/words'
import { IWordsItem } from 'core/interfaces/dataModels'

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
  difficultWords: [],
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

export const { setFocusWord, setDifficultWords } = texBookSlice.actions
export default texBookSlice.reducer
