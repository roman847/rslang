import axios from 'axios'
import { BrowserStorageItem, WordItemBg } from 'core/variables/constants'
import { IUserInfo } from 'core/interfaces/dataModels'
import { localStorageService } from './localStorageHelper'

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

export const getId = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user') as string).userId
  }
}

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
})
export const identifyWordItemBg = (group: string) => {
  let bg = ''
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
