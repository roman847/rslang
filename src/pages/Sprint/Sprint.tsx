import React from 'react'
import { Box } from '@mui/material'
import Header from './components/Header'
import SprintInitial from './components/SprintInitial'
import styles from './styles'

const Sprint = () => {
  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>
        <Header />
        <SprintInitial />
      </Box>
    </Box>
  )
}

export default Sprint
