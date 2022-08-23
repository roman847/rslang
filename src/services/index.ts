import axios from 'axios'

export const saveToken = (tolken: string): void => {
  localStorage.setItem('tolken', tolken)
}

export const getToken = () => {
  return localStorage.getItem('tolken')
}

export const axiosInstance = axios.create({
  baseURL: 'https://react-learn-new-words.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
})
