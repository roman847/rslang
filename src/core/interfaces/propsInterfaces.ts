import React from 'react'
import {
  DevelopersNames,
  TeamGithub,
  ButtonVariants,
  Color,
  TypesInput,
  LogoSize,
} from 'core/variables/constants'

export interface IPropsCard {
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

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  background?: Color
  width?: number | string
  height?: number
  fontSize?: number
  disabled?: boolean
  lineHeight?: number
  borderColor?: Color
  hoverColor?: Color
  action?: (e?: React.MouseEvent) => void
  children?: React.ReactNode
}

export interface IPropsSelectElement {
  label: string
  fields: string[]
}

export interface ILogoProps {
  size?: LogoSize
}

export interface IPropsModal {
  open: boolean
  handleOpening: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IconProps {
  width?: number
  height?: number
  fill: string
  viewBox?: string
  path: string
  stroke: string
  strokeWidth: string
}

export interface IconProp {
  isModeOn: boolean
}
