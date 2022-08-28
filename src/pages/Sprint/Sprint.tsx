import React from 'react'
import { Box } from '@mui/material'
import styles from './styles'
import Header from './components/Header'

const Sprint = () => {
  return (
    <Box sx={styles.main}>
      <Box component='main' sx={styles.wrapper}>
        <Header />
      </Box>
    </Box>
  )
}

export default Sprint
