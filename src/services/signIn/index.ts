import { AxiosError } from 'axios'

import { axiosInstance, saveToken } from 'services'
import { IUserData, IAuthorizingUser } from 'core/interfaces/dataModels'

export const signIn = async ({
  password,
  email,
}: IAuthorizingUser): Promise<Array<IUserData> | void> => {
  try {
    const response = await axiosInstance.post('/signin', {
      password: password,
      email: email,
    })

    saveToken(response.data)

    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}
