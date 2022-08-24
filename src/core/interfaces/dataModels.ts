export interface IAuthorizingUser {
  password: string
  email: string
}

export interface IUserData {
  message: string
  token: string
  refreshToken: string
  userId: string
  name: string
}

export interface IUser {
  name: string
  email: string
  password: string
}

export interface IUpdateUser {
  id: string
  email: string
  password: string
}

export interface IWordsItem {
  id: string
  group: 0
  page: 0
  word: string
  image: string
  audio: string
  audioMeaning: string
  audioExample: string
  textMeaning: string
  textExample: string
  transcription: string
  wordTranslate: string
  textMeaningTranslate: string
  textExampleTranslate: string
}

export interface IGetWords {
  page: string
  group: string
}

export interface IUserInfo {
  message: string
  token: string
  refreshToken: string
  userId: string
  name: string
}
