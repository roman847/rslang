import axios, { AxiosError } from 'axios'
import { axiosInstance, saveToken } from 'services'
import { IUserData, IAuthorizingUser } from 'core/interfaces/dataModels'
import { ServerError } from 'core/interfaces/commonInterfaces'
import { ServerErrorMessage, UserErrorMessage } from 'core/variables/constants'

export const errorHandler = (err: string) => {
  if (err === ServerErrorMessage.forbidden) {
    return UserErrorMessage.forbidden
  } else {
    return UserErrorMessage.userNotFound
  }
}

export const signIn = async ({
  password,
  email,
}: IAuthorizingUser): Promise<IUserData | UserErrorMessage | ServerError> => {
  try {
    const response = await axiosInstance.post('/signin', {
      password: password,
      email: email,
    })

    saveToken(response.data)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<string>
      if (serverError && serverError.response) {
        return errorHandler(serverError.response.data)
      }
    }
    return { errorMessage: 'Unknown error' }
  }
}
