import { AxiosError } from 'axios'
import { axiosInstance } from 'services'
import { IUser, IUpdateUser } from 'core/interfaces/dataModels'

export const createUser = async ({
  name,
  email,
  password,
}: IUser): Promise<Array<IUser> | void> => {
  try {
    const response = await axiosInstance.post('/users', {
      name: name,
      email: email,
      password: password,
    })
    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}

export const getUser = async (id: string): Promise<IUser | void> => {
  try {
    const response = await axiosInstance.get(`/users/${id}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}

export const updateUser = async ({ id, email, password }: IUpdateUser): Promise<IUser | void> => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, {
      email: email,
      password: password,
    })
    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}

export const deleteUser = async (id: string): Promise<IUser | void> => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}
