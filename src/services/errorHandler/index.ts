import { IError } from 'core/interfaces/dataModels'
import { ErrorPaths, ServerErrorMessage, UserErrorMessage } from 'core/variables/constants'

export const signInErrHandler = (err: string) => {
  if (err === ServerErrorMessage.forbidden) {
    return UserErrorMessage.forbidden
  } else {
    return UserErrorMessage.userNotFound
  }
}

export const createUserErrHandler = (err: IError | string): UserErrorMessage => {
  if (typeof err === 'string') {
    if (err === ServerErrorMessage.userExists) return UserErrorMessage.userExists
    return UserErrorMessage.unexpectedError
  }
  const { errors } = err.error
  const firstError = errors[0]

  switch (firstError.path[0]) {
    case ErrorPaths.name:
      if (firstError.message.includes(ServerErrorMessage.empty)) {
        return UserErrorMessage.emptyName
      }
      break
    case ErrorPaths.email:
      if (firstError.message.includes(ServerErrorMessage.empty)) return UserErrorMessage.emptyEmail
      if (firstError.message === ServerErrorMessage.invalidEmail) {
        return UserErrorMessage.invalidEmail
      }
      break
    case ErrorPaths.password:
      if (firstError.message.includes(ServerErrorMessage.empty)) {
        return UserErrorMessage.emptyPassword
      }
      if (firstError.message === ServerErrorMessage.incorrectPasswordLength) {
        return UserErrorMessage.incorrectPasswordLength
      }
      break
  }
  return UserErrorMessage.unexpectedError
}
