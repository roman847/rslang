import axios, { AxiosError } from 'axios'
import { axiosInstance } from 'services'
import { IWordsItem, IWordItemDifficult } from 'core/interfaces/dataModels'
import { ServerError } from 'core/interfaces/commonInterfaces'

interface IResponseCreateWord {
  difficulty: string
  optional: {
    word: IWordsItem
  }
}

export const createWord = async (
  userId: string,
  word: IWordsItem,
): Promise<IResponseCreateWord | ServerError> => {
  try {
    const response = await axiosInstance.post(`users/${userId}/words/${word.id}`, {
      difficulty: 'difficult',
      optional: {
        word: word.word,
        wordTranslate: word.wordTranslate,
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

export const getUserWords = async (userId: string): Promise<IWordItemDifficult[]> => {
  const response = await axiosInstance.get(`users/${userId}/words`)
  return response.data
}

export const deleteUserWord = async (
  userId: string,
  wordId: string,
): Promise<IWordsItem[] | void> => {
  try {
    const response = await axiosInstance.delete(`users/${userId}/words/${wordId}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
