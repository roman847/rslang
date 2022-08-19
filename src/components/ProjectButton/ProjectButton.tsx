import React from 'react'
import { Button, styled } from '@mui/material'
import { ButtonVariants, Color, IButtonProps } from '../../core/interfaces/propsInterfaces'
import '../../styles/main.scss'

function ProjectButton(props: IButtonProps) {
  const {
    children,
    variant,
    background,
    height,
    width,
    fontSize,
    lineHeight,
    borderColor,
    action,
  } = props

  const BasicButton = styled(Button)({
    height,
    width,
    background,
    fontSize,
    lineHeight,
    borderColor,
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontStyle: 'normal',
    fontWeight: 700,
    textTransform: 'none',
    borderRadius: '100px',
  })

  const PrimaryButton = styled(BasicButton)({
    background: Color.primary,
    color: Color.lightText,
    '&:hover, &:active': {
      background: '#B9410D',
    },
  })

  const SecondaryButton = styled(BasicButton)({
    border: `1px solid ${borderColor}`,
    color: Color.blackText,
    fontWeight: 500,
    '&:hover, &:active': {
      background: '#D5EBF0',
    },
  })

  if (variant === ButtonVariants.primary || !variant) {
    return <PrimaryButton onClick={action}>{children}</PrimaryButton>
  } else {
    return <SecondaryButton>{children}</SecondaryButton>
  }
}

export default ProjectButton
