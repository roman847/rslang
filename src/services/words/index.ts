import { AxiosError } from 'axios'
import { axiosInstance } from 'services'
import { IWordsItem } from './interfaces'

interface IGetWords {
  page: string
  group: string
}

export const getWords = async ({
  page,
  group,
}: IGetWords): Promise<Array<IWordsItem> | undefined> => {
  try {
    const response = await axiosInstance.get(`/words?group=${group}&page=${page}`)
    return response.data
  } catch {
    console.error('Error')
  }
}

export const getWordsAssets = async (id: string): Promise<IWordsItem | undefined> => {
  try {
    const response = await axiosInstance.get(`/words/${id}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}
