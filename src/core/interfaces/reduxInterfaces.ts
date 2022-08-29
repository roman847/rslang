import { IWordsItem } from 'core/interfaces/dataModels'
export interface IStore {
  textBook: IReducer
}
export interface IReducer {
  page: {
    number: string
  }
  group: {
    number: string
  }
  words: IWordsItem[]
  focusWord: IWordsItem | null
}
