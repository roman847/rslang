import React from 'react'
import { Box } from '@mui/material'
import Header from './components/Header'
import styles from './styles'
import Body from './components/Body'

const AudioCall = () => {
  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>
        <Header />
        <Body />
      </Box>
    </Box>
  )
}
export default AudioCall
