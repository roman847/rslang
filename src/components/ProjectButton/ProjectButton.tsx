import React from 'react'
import { Button, styled } from '@mui/material'
import { IButtonProps } from 'core/interfaces/propsInterfaces'
import { ButtonVariants, Color } from 'core/variables/constants'

const ProjectButton = ({
  children,
  variant,
  background,
  height,
  width,
  fontSize,
  disabled,
  lineHeight,
  borderColor = Color.secondary,
  hoverColor,
  action,
  type,
  buttonColor = Color.primary,
}: IButtonProps) => {
  const BasicButton = styled(Button)({
    height,
    width,
    disabled,
    background,
    fontSize,
    lineHeight,
    borderColor,
    hoverColor,
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontStyle: 'normal',
    fontWeight: 700,
    textTransform: 'none',
    borderRadius: '100px',
    maxHeight: height,
  })

  const PrimaryButton = styled(BasicButton)({
    background: disabled ? Color.disabledButton : buttonColor,
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
      background: hoverColor ? hoverColor : borderColor,
    },
  })

  if (variant === ButtonVariants.primary || !variant) {
    return (
      <PrimaryButton type={type} disabled={disabled} onClick={action}>
        {children}
      </PrimaryButton>
    )
  } else {
    return (
      <SecondaryButton type={type} onClick={action}>
        {children}
      </SecondaryButton>
    )
  }
}

export default ProjectButton
