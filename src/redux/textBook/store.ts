import { configureStore } from '@reduxjs/toolkit'
import { IReducer } from 'redux/textBook/dictionary'
import setPageReducer from './dictionary'

export interface IStore {
  textBook: IReducer
}
// export default configureStore({
//   reducer: {
//     textBook: setPageReducer,
//   },
// })
