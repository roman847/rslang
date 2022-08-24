import { AxiosError } from 'axios'
import { axiosInstance } from 'services'
import { IWordsItem, IGetWords } from 'core/interfaces/dataModels'

export const getWords = async ({ page, group }: IGetWords): Promise<Array<IWordsItem> | void> => {
  try {
    const response = await axiosInstance.get('/words', {
      params: {
        group,
        page,
      },
    })
    return response.data
  } catch {
    console.error('Error')
  }
}

export const getWordsAssets = async (id: string): Promise<IWordsItem | void> => {
  try {
    const response = await axiosInstance.get(`/words/${id}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}
