import pxToRem from 'core/functions/pxToRem'

export enum DevelopersNames {
  Roman = 'Roman',
  Alibek = 'Алибек',
  Andrey = 'Андрей',
}

export enum AboutTeam {
  Roman = 'Настроил приложение, базовые настройки проекта, начальную компоновку, создал словарь, header,блок "О команде",  страницу статистики',
  Alibek = 'Создал компоненту "Button", реализовал игру "Спринт", регистрацию, блок "Наши возможности", обработку ошибок в запросах',
  Andrey = 'Создал Footer, секцию "Главный контент", логотип, реализовал игру "Аудиовызов", авторизацию, устранял общие недочеты',
}

export enum AvatarsTeam {
  Roman = 'images/roman-avatar.jpg',
  Alibek = 'images/alibek.jpg',
  Andrey = 'images/andrey.jpg',
}
export enum Images {
  git = 'images/github.png',
  school = 'images/school.png',
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
  name = 'name',
}

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  contained = 'contained',
  outlined = 'outlined',
  text = 'text',
}

export enum Color {
  none = 'none',
  primary = '#F06A33',
  secondary = '#3E92A3',
  secondaryLight = '#E1F1F5',
  lightText = '#F0F0F0',
  blackText = '#1D1D1D',
  disabledButton = '#DBC7BF',
  pageBackground = '#FAF8F5',
  error = '#B71313',
  errorLight = '#FCE2E2',
  activePrimaryButton = '#FAD2C0',
  primaryLight = '#F49B73',
  correctAnswerBackground = '#E5F2F5',
  incorrectAnswerBackground = '#FDEAEA',
  gray = '#646464',
  secondaryButtonHover = '#D5EBF0',
  lightGray = '#DAD9D9',
  innerListItems = '#42474E',
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

export const Montserrat22 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: `${pxToRem(22)}`,
  lineHeight: `${pxToRem(27)}`,
}

export const Montserrat28 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: `${pxToRem(28)}`,
  lineHeight: `${pxToRem(34)}`,
}

export const Montserrat32 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: `${pxToRem(32)}`,
  lineHeight: `${pxToRem(39)}`,
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

export const Montserrat52 = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 600,
  fontStyle: 'normal',
  fontSize: `${pxToRem(52)}`,
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

export enum WordItemBg {
  A1 = '#FAD2C0',
  A2 = '#C0E4EB',
  B1 = '#FAD3E8',
  B2 = '#F0EDCE',
  C1 = '#D0F5D1',
  C2 = '#D6DCF3',
}
export enum WordItemHover {
  A1 = '#F49B73',
  A2 = '#8EC4CE',
  B1 = '#F49DCC',
  B2 = '#E2DAA1',
  C1 = '#AAEEAC',
  C2 = '#B6C1EA',
}
export const languageLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export enum GameType {
  Sprint = 'Sprint',
  AudioCall = 'AudioCall',
}

export enum IconPath {
  closeGameIcon = 'M18 6L6 18M6 6l12 12',
}

export enum Pages {
  main = '/',
  auth = '/auth',
  reg = '/reg',
  audio = '/audio',
  sprint = '/sprint',
  statistics = '/statistics',
  textbook = '/textbook',
}
