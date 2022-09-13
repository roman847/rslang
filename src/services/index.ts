import axios from 'axios'
import { BrowserStorageItem, WordItemBg, WordItemHover } from 'core/variables/constants'
import { IWordsItem, IUserInfo } from 'core/interfaces/dataModels'

import { localStorageService } from './localStorageHelper'

export const saveLocalStorage = (nameField: string, value: string) => {
  localStorage.setItem(nameField, value)
}
export const saveToken = (userInfo: IUserInfo): void => {
  localStorageService.set(BrowserStorageItem.userToken, userInfo.token)
}
export const saveUserID = (userInfo: IUserInfo): void => {
  localStorageService.set(BrowserStorageItem.userId, userInfo.userId)
}

export const getToken = () => {
  return localStorageService.get(BrowserStorageItem.userToken)
}

export const getUserId = () => {
  return localStorageService.get(BrowserStorageItem.userId)
}

export const removeUserId = () => {
  localStorageService.remove(BrowserStorageItem.userId)
}

export const removeToken = () => {
  localStorageService.remove(BrowserStorageItem.userToken)
}

export const getId = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user') as string).userId
  }
}

export const getGroup = () => {
  if (localStorage.getItem('group')) {
    return localStorage.getItem('group') as string
  } else {
    return '0'
  }
}
export const getPage = () => {
  if (localStorage.getItem('page')) {
    return localStorage.getItem('page') as string
  } else {
    return '0'
  }
}

const token = getToken()
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (!config.headers) config.headers = {}
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => console.log(error),
)

export const identifyLearnedWord = (arr: IWordsItem[], id: string): boolean | void => {
  let isLearned = false
  arr.forEach((item) => {
    if (item.id === id) {
      isLearned = true
    }
  })
  return isLearned
}

export const identifyDifficultWord = (arr: IWordsItem[], id: string): boolean => {
  let isDifficult = false
  arr.forEach((item) => {
    if (item.id === id) {
      isDifficult = true
    }
  })
  return isDifficult
}

export const identifyWordItemBg = (group: string) => {
  let bg: string
  switch (group) {
    case '0':
      bg = WordItemBg.A1
      break
    case '1':
      bg = WordItemBg.A2
      break
    case '2':
      bg = WordItemBg.B1
      break
    case '3':
      bg = WordItemBg.B2
      break
    case '4':
      bg = WordItemBg.C1
      break
    case '5':
      bg = WordItemBg.C2
      break
    default:
      bg = WordItemBg.A1
      break
  }
  return bg
}
export const identifyWordItemHover = (group: string) => {
  let hover: string
  switch (group) {
    case '0':
      hover = WordItemHover.A1
      break
    case '1':
      hover = WordItemHover.A2
      break
    case '2':
      hover = WordItemHover.B1
      break
    case '3':
      hover = WordItemHover.B2
      break
    case '4':
      hover = WordItemHover.C1
      break
    case '5':
      hover = WordItemHover.C2
      break
    default:
      hover = WordItemHover.A1
      break
  }
  return hover
}
export const identifyActiveButtonCircle = (id: number) => {
  let hover: string
  switch (id) {
    case 0:
      hover = WordItemHover.A1
      break
    case 1:
      hover = WordItemHover.A2
      break
    case 2:
      hover = WordItemHover.B1
      break
    case 3:
      hover = WordItemHover.B2
      break
    case 4:
      hover = WordItemHover.C1
      break
    case 5:
      hover = WordItemHover.C2
      break
    default:
      hover = WordItemHover.A1
      break
  }
  return hover
}
