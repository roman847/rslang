import axios, { AxiosError } from 'axios'
import { axiosInstance } from 'services'
import { IUser, IUpdateUser } from 'core/interfaces/dataModels'
import { ServerError } from '../../core/interfaces/commonInterfaces'

export const createUser = async ({
  name,
  email,
  password,
}: IUser): Promise<IUser | ServerError> => {
  try {
    const response = await axiosInstance.post('/users', {
      name: name,
      email: email,
      password: password,
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>
      if (serverError && serverError.response) {
        console.log(serverError.response.data)
        return serverError.response.data
      }
    }
    return { errorMessage: 'Unknown error' }
  }
}

export const getUser = async (id: string): Promise<IUser | ServerError> => {
  try {
    const response = await axiosInstance.get(`/users/${id}`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>
      if (serverError && serverError.response) {
        return serverError.response.data
      }
    }
    return { errorMessage: 'Unknown error' }
  }
}

export const updateUser = async ({
  id,
  email,
  password,
}: IUpdateUser): Promise<IUser | ServerError> => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, {
      email: email,
      password: password,
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>
      if (serverError && serverError.response) {
        return serverError.response.data
      }
    }
    return { errorMessage: 'Unknown error' }
  }
}

export const deleteUser = async (id: string): Promise<IUser | ServerError> => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>
      if (serverError && serverError.response) {
        return serverError.response.data
      }
    }
    return { errorMessage: 'Unknown error' }
  }
}
