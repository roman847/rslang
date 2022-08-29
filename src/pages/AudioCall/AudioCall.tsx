import React from 'react'
import { Box } from '@mui/material'
import Header from './components/Header'
import styles from './styles'

const AudioCall = () => {
  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>
        <Header />
      </Box>
    </Box>
  )
}
export default AudioCall
