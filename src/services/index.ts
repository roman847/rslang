import axios from 'axios'
import { IUserInfo } from 'core/interfaces/dataModels'

export const saveToken = (userInfo: IUserInfo): void => {
  localStorage.setItem('user', JSON.stringify(userInfo))
}

export const getToken = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user') as string).token
  }
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
