import axios, { AxiosError } from 'axios'
import { axiosInstance } from 'services'
import { IWordsItem, IGetWords } from 'core/interfaces/dataModels'
import { ServerError } from 'core/interfaces/commonInterfaces'

export const getWords = async ({
  page,
  group,
}: IGetWords): Promise<Array<IWordsItem> | ServerError> => {
  try {
    const response = await axiosInstance.get('/words', {
      params: {
        group,
        page,
      },
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

export const getWordsAssets = async (id: string): Promise<IWordsItem | ServerError> => {
  try {
    const response = await axiosInstance.get(`/words/${id}`)
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
