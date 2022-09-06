import { createSlice } from '@reduxjs/toolkit'

interface IGeneralState {
  currentUser: string
}

const initialState: IGeneralState = {
  currentUser: '',
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = generalSlice.actions

export default generalSlice.reducer
