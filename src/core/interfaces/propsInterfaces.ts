import React from 'react'

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

export interface IButtonProps {
  variant?: ButtonVariants
  background?: Color
  width?: number
  height?: number
  fontSize?: number
  lineHeight?: number
  borderColor?: Color
  action?: () => void
  children?: React.ReactNode
}

export enum Color {
  primary = '#F06A33',
  secondary = '#3E92A3',
  lightText = '#F0F0F0',
  blackText = '#1D1D1D',
}
