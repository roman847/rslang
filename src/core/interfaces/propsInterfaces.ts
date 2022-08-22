import React from 'react'
import { ButtonVariants, Color } from '../variables/constansts'
import { TypesInput } from '../variables/constants'

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
