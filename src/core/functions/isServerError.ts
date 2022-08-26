import { ServerError } from '../interfaces/commonInterfaces'
import { IUserData } from '../interfaces/dataModels'

const isServerError = (data: ServerError | IUserData): data is ServerError => {
  return (data as ServerError).errorMessage !== undefined
}

export default isServerError
