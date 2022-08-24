import axios, { AxiosError } from 'axios'

import { axiosInstance, saveToken } from 'services'
import { IUserData, IAuthorizingUser } from 'core/interfaces/dataModels'
import { ServerError } from 'core/interfaces/commonInterfaces'

export const signIn = async ({
  password,
  email,
}: IAuthorizingUser): Promise<Array<IUserData> | ServerError> => {
  try {
    const response = await axiosInstance.post('/signin', {
      password: password,
      email: email,
    })

    saveToken(response.data)

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
