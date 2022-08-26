import { ServerError } from 'core/interfaces/commonInterfaces'
import { IUserData } from 'core/interfaces/dataModels'

const isServerError = (data: ServerError | IUserData): data is ServerError => {
  return (data as ServerError).errorMessage !== undefined
}

export default isServerError
