export interface IAuthorizingUser {
  password: string
  email: string
}

export interface IUserData {
  message: 'string'
  token: 'string'
  refreshToken: 'string'
  userId: 'string'
  name: 'string'
}
