import { configureStore } from '@reduxjs/toolkit'
import setPageReducer from './textBookSlice'

export default configureStore({
  reducer: {
    textBook: setPageReducer,
  },
})
