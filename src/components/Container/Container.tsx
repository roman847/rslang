import React from 'react'
import { Box } from '@mui/material'
import { IContainer } from 'core/interfaces/propsInterfaces'
import { useAppSelector } from 'app/hooks'
import pxToRem from 'core/functions/pxToRem'
import styles from './styles'

const Container = ({ width = 630, height = 550, children }: IContainer) => {
  const { background } = useAppSelector((state) => state.sprint)
  return (
    <Box sx={{ ...styles.container, width: pxToRem(width), height: pxToRem(height), background }}>
      {children}
    </Box>
  )
}

export default Container
