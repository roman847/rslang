import React from 'react'
import { ButtonVariants, Color } from '../variables/constansts'

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
