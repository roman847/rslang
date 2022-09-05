import { createSlice } from '@reduxjs/toolkit'

interface IGeneralState {
  currentUserName: string
}

const initialState: IGeneralState = {
  currentUserName: '',
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setCurrentUserName: (state, action) => {
      state.currentUserName = action.payload
    },
  },
})

export const { setCurrentUserName } = generalSlice.actions

export default generalSlice.reducer
