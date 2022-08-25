import axios from 'axios'
import { BrowserStorageItem } from 'core/variables/constants'
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

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
})
