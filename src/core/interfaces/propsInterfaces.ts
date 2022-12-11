import React from 'react'
import { IWordsItem } from 'core/interfaces/dataModels'

import {
  DevelopersNames,
  TeamGithub,
  ButtonVariants,
  Color,
  TypesInput,
  LogoSize,
  GameType,
} from 'core/variables/constants'

export interface IPropsCard {
  role: string
  name: DevelopersNames
  teamAvatar: string
  text: string
  githubLink: TeamGithub
}

export interface IPropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  placeholder: string
  type: TypesInput
  name?: string
  action?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
}

/**
 * Interface describes custom project button properties
 *
 * @interface
 */

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines variant of button styles.
   * @default 'primary'
   */
  variant?: ButtonVariants
  /**
   * Defines background color for button.
   */
  background?: Color
  /**
   * Defines width of button
   */
  width?: number | string
  /**
   * Defines height of button
   */
  height?: number
  /**
   * Defines font size of button's text
   */
  fontSize?: number
  /**
   * Property that set button into 'disable' status
   */
  disabled?: boolean
  /**
   * Line height for button's text
   */
  lineHeight?: number
  /**
   * Color of button border. Exists only on 'secondary' variant of button.
   * @default borderColor
   */
  borderColor?: Color
  /**
   * Color of background when button has been hovered
   */
  hoverColor?: Color
  /**
   * Callback function that runs after click on button. Equivalent of onClick default property
   * @param {React.MouseEvent} e - Mouse event that could be handled
   */
  action?: (e?: React.MouseEvent) => void
  /**
   * Default React property for passing child elements (text or icons) into button
   */
  children?: React.ReactNode
  /**
   * Describes color of button's background
   */
  buttonColor?: Color
  /**
   * Describes borderWidth button
   */
  borderWidth?: number | string
  /**
   * Describes borderWidth button
   */
  borderStyle?: string
}

/**
 * Describes interface for menu that opens after click on the button (i.e. Games button on the main page)
 * @interface
 */
export interface IPropsSelectElement {
  /**
   * Defines text on unopened menu button
   */
  label: string
}

export interface IRadioButton {
  id: string
  name: string
  text: string
}

/**
 * Defines logotype props and makes Logo reusable
 * @interface
 */
export interface ILogoProps {
  /**
   * Defines size of logo. 2 options here: standard or big
   * @default standard
   */
  size?: LogoSize
}

export interface IPropsModal {
  open: boolean
  handleOpening: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Defines props of Icon component
 * @interface
 */
export interface IconProps {
  /**
   * Defines width of icon
   * @default 24px
   */
  width?: number
  /**
   * Defines height of icon
   * @default 24px
   */
  height?: number
  /**
   * Defines color of icon in HEX format on hover or active effects.
   */
  fill: string
  /**
   * Defines viewBox of icon for cases when it's different from icon size.
   * @default `0 0 ${width} ${height}`
   */
  viewBox?: string
  /**
   * Defines SVG-icon itself. Vector graphic describes here.
   */
  path: string
  /**
   * Defines default color of icon
   */
  stroke: string
  /**
   * Defines width of icon stroke
   */
  strokeWidth: string
}

/**
 * That interface allows swap icons after click. I.e. on change screen modes (default / fullscreen)
 * @interface
 */
export interface IconProp {
  /**
   * If true - Icon component returns one icon, if false - another one.
   */
  isModeOn: boolean
}

export interface ILinkToGameProp {
  image: string
  title: string
  description: string
  route: string
}

export interface IWordItemProps {
  wordTranslate: string
  wordId?: string
  word: string
  bg: string
  hover: string
  item?: IWordsItem
  border?: string
  active?: boolean
  onClick?: () => void
  isDifficult?: boolean
}
/**
 * Defines standard React prop children and allow us to pass children nodes to our custom component
 * @interface
 */
export interface IParentProp {
  /**
   * Has no value and should be used just like <OurComponent>{ children }</ OurComponent>.
   */
  children?: React.ReactNode
}

/**
 * Defines parameters of reusable container for Sprint,AudioCall and Results components.
 * @interface
 */
export interface IContainer extends IParentProp {
  /**
   * Defines width of container in px
   * @default 630px
   */
  width?: number
  /**
   * Defines height of container in px
   * @default 550px
   */
  height?: number
}

/**
 * Defines type of game inside the reusable components and render parameters according to gameType
 * @interface
 */
export interface IGameResults {
  /**
   * Defines type of game: Sprint or AudioCall
   */
  gameType: GameType
}
