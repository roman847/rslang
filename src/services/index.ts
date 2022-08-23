import axios, { AxiosError } from 'axios'

export const getWords = async () => {
  try {
    const response = await axios.get('https://react-learn-new-words.herokuapp.com/words')
    return response.data
  } catch {
    console.error('Error')
  }
}

interface ICreateUser {
  name: string
  email: string
  password: string
}
export const createUser = async ({ name, email, password }: ICreateUser) => {
  try {
    const response = await axios.post(
      'https://react-learn-new-words.herokuapp.com/users',
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
  } catch (error) {
    const err = error as AxiosError
    console.error(err.response?.data)
  }
}
