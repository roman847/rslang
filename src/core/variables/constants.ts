import pxToRem from '../functions/pxToRem'

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

export const Montserrat46 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: `${pxToRem(46)}`,
  lineHeight: `${pxToRem(70)}`,
}
export enum BrowserStorageItem {
  userToken = 'userToken',
  userId = 'userId',
}
