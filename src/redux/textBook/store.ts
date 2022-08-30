import { configureStore } from '@reduxjs/toolkit'
import { IReducer } from 'redux/textBook/textBookSlice'
import setPageReducer from './textBookSlice'

export interface IStore {
  textBook: IReducer
}
export default configureStore({
  reducer: {
    textBook: setPageReducer,
  },
})
