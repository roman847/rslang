import React from 'react'
import '../../styles/main.scss'
import { Button, styled } from '@mui/material'
import { IButtonProps } from '../../core/interfaces/propsInterfaces'
import { ButtonVariants, Color } from '../../core/variables/constansts'

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
  action,
}: IButtonProps) => {
  const BasicButton = styled(Button)({
    height,
    width,
    disabled,
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
    background: disabled ? Color.disabledButton : Color.primary,
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
      background: borderColor,
    },
  })

  if (variant === ButtonVariants.primary || !variant) {
    return (
      <PrimaryButton disabled={disabled} onClick={action}>
        {children}
      </PrimaryButton>
    )
  } else {
    return <SecondaryButton onClick={action}>{children}</SecondaryButton>
  }
}

export default ProjectButton
