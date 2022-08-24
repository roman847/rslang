import React from 'react'
import {
  DevelopersNames,
  TeamGithub,
  ButtonVariants,
  Color,
  TypesInput,
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
}

export interface IButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  background?: Color
  width?: number | string
  height?: number
  fontSize?: number
  disabled?: boolean
  lineHeight?: number
  borderColor?: Color
  action?: (e?: React.MouseEvent) => void
  children?: React.ReactNode
}

export interface IPropsSelectElement {
  label: string
  fields: string[]
}
