import React from 'react'
import { Box } from '@mui/material'
import { IParentProp } from 'core/interfaces/propsInterfaces'
import styles from './styles'

const Container = ({ children }: IParentProp) => {
  return <Box sx={styles.container}>{children}</Box>
}

export default Container
