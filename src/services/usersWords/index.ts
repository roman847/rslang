import { AxiosError } from 'axios'
import { axiosInstance } from 'services'

export const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}
