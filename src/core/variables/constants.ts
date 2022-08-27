import pxToRem from 'core/functions/pxToRem'

export enum DevelopersNames {
  Roman = 'Roman',
  Alibek = 'Алибек',
  Andrey = 'Андрей',
}

export enum AboutTeam {
  Roman = 'Нечем заняться в выходной,придумываю всем девизы',
  Alibek = 'Устал работать в огне, решил стать программистом',
  Andrey = 'Столичный парень, в столице все хотят быть программистами',
}

export enum AvatarsTeam {
  Roman = 'images/roman-avatar.jpg',
  Alibek = 'images/alibek.jpg',
  Andrey = 'images/andrey.jpg',
}

export enum TeamGithub {
  Roman = 'https://github.com/roman847',
  Alibek = 'https://github.com/limhill',
  Andrey = 'https://github.com/DittmerOk',
  RsShool = 'https://app.rs.school/',
}

export enum TypesInput {
  email = 'email',
  password = 'password',
  text = 'text',
}

export const AlibekGit = 'https://github.com/limhill'
export const AndreyGit = 'https://github.com/DittmerOk'
export const RomanGit = 'https://github.com/roman847'
export const RsShoolGit = 'https://app.rs.school/'

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

export enum Color {
  primary = '#F06A33',
  secondary = '#3E92A3',
  lightText = '#F0F0F0',
  blackText = '#1D1D1D',
  disabledButton = '#DBC7BF',
  pageBackground = '#FAF8F5',
  error = '#B71313',
}

export const Montserrat16 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: `${pxToRem(16)}`,
  lineHeight: `${pxToRem(25)}`,
}

export const Montserrat18 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: `${pxToRem(18)}`,
  lineHeight: `${pxToRem(22)}`,
}

export const Montserrat28 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: `${pxToRem(28)}`,
  lineHeight: `${pxToRem(34)}`,
}

export const Montserrat36 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: `${pxToRem(36)}`,
  lineHeight: `${pxToRem(50)}`,
}

export const Montserrat46 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: `${pxToRem(46)}`,
  lineHeight: `${pxToRem(70)}`,
}

export const Mulish36 = {
  fontFamily: 'Mulish, sans-serif',
  fontWeight: 700,
  fontSize: `${pxToRem(36)}`,
  lineHeight: `${pxToRem(50)}`,
  letterSpacing: '0.07em',
}

export enum BrowserStorageItem {
  userToken = 'userToken',
  userId = 'userId',
}

export enum ServerErrorMessage {
  userNotFound = "Couldn't find a(an) user with",
  forbidden = 'Forbidden',
  empty = 'is not allowed to be empty',
  invalidEmail = '"email" must be a valid email',
  incorrectPasswordLength = '"password" length must be at least 8 characters long',
  userExists = 'user with this e-mail exists',
}

export enum UserErrorMessage {
  userNotFound = 'Пользователя с таким email не существует!',
  forbidden = 'Неверный пароль!',
  emptyName = 'Введите имя пользователя!',
  emptyEmail = 'Введите email!',
  emptyPassword = 'Введите пароль!',
  invalidEmail = 'Введите корректный почтовый адрес!',
  incorrectPasswordLength = 'Длина пароля должна быть не менее 8 символов!',
  unexpectedError = 'Произошла непредвиденная ошибка',
  userExists = 'Пользователь с таким email уже существует!',
}

export enum ErrorPaths {
  name = 'name',
  email = 'email',
  password = 'password',
}

export enum LogoSize {
  normal = 'logo',
  big = 'logo_big',
}
