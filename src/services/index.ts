import axios from 'axios'
import { IUserInfo } from '../core/interfaces/dataModels'

export const saveToken = (token: IUserInfo): void => {
  localStorage.setItem('user', JSON.stringify(token))
}

export const getToken = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')!).token
  }
}

export const getId = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')!).userId
  }
}

export const axiosInstance = axios.create({
  baseURL: 'https://react-learn-new-words.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
})
