import axios, { AxiosError } from 'axios'
import { axiosInstance, saveToken, saveUserID } from 'services'
import { IUserData, IAuthorizingUser } from 'core/interfaces/dataModels'
import { ServerError } from 'core/interfaces/commonInterfaces'
import { UserErrorMessage } from 'core/variables/constants'
import { signInErrHandler } from 'services/errorHandler'
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
    saveUserID(response.data)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<string>
      if (serverError && serverError.response) {
        return signInErrHandler(serverError.response.data)
      }
    }
    return { errorMessage: 'Unknown error' }
  }
}
