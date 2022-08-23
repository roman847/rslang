import {
  DevelopersNames,
  TeamGithub,
  ButtonVariants,
  Color,
  TypesInput,
} from 'core/variables/constants'
import React from 'react'

export interface IPropsCard {
  name: DevelopersNames
  teamAvatar: string
  text: string
  githubLink: TeamGithub
}

export interface IPropsCard {
  name: DevelopersNames
  teamAvatar: string
  text: string
  githubLink: TeamGithub
}

export interface IPropsInput {
  id: string
  placeholder: string
  type: TypesInput
}

export interface IButtonProps {
  variant?: ButtonVariants
  background?: Color
  width?: number
  height?: number
  fontSize?: number
  disabled?: boolean
  lineHeight?: number
  borderColor?: Color
  action?: () => void
  children?: React.ReactNode
}

export interface IPropsSelectElement {
  label: string
  fields: string[]
}
