import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWords } from 'services/words'
import { IWordsItem } from './../../core/interfaces/dataModels'

interface ITextBook {
  page: {
    number: string
  }
  group: {
    number: string
  }
  focusWord: IWordsItem | null

  words: IWordsItem[]
  status: string | null
  error: string | null
}

interface IOptions {
  page: string
  group: string
}

export const fetchWords = createAsyncThunk<IWordsItem[], IOptions>(
  'textBook/fetchWords',
  async function ({ page, group }: IOptions) {
    const response = getWords({ page: page, group: group })
    return response
  },
)

const initialState: ITextBook = {
  page: {
    number: '0',
  },
  group: {
    number: '0',
  },
  focusWord: null,

  words: [],
  status: null,
  error: null,
}

const texBookSlice = createSlice({
  name: 'textBook',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page.number = action.payload.number
    },
    setGroup(state, action) {
      state.group.number = action.payload.number
    },
    setFocusWord(state, action) {
      state.focusWord = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload
        state.status = 'resolved'
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.status = 'rejected'
        throw new Error('Error')
      })
  },
})

export const { setPage, setGroup, setFocusWord } = texBookSlice.actions
export default texBookSlice.reducer
