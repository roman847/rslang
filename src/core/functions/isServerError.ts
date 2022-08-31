import { ServerError } from 'core/interfaces/commonInterfaces'
import { IUserData, IUser, IWordsItem } from 'core/interfaces/dataModels'

const isServerError = (
  data: ServerError | IUserData | IUser | IWordsItem[],
): data is ServerError => {
  return (data as ServerError).errorMessage !== undefined
}

export default isServerError
