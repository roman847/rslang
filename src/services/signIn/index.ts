import { AxiosError } from 'axios'
import { axiosInstance, saveToken } from 'services'

import { IUserData, IAuthorizingUser } from './interfaces'

export const signIn = async ({
  password,
  email,
}: IAuthorizingUser): Promise<Array<IUserData> | undefined> => {
  try {
    const response = await axiosInstance.post('/signin', {
      password: password,
      email: email,
    })

    saveToken(response.data.token)

    return response.data
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}
