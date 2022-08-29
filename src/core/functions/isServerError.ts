import { ServerError } from 'core/interfaces/commonInterfaces'
import { IUserData, IUser } from 'core/interfaces/dataModels'

const isServerError = (data: ServerError | IUserData | IUser): data is ServerError => {
  return (data as ServerError).errorMessage !== undefined
}

export default isServerError
