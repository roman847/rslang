import React from 'react'
import { Box, Typography } from '@mui/material'
import styles from './styles'

const GameResults = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.header}>
        <Typography sx={styles.link}>Ваш результат</Typography>
        <Typography sx={styles.link}>Посмотреть слова</Typography>
      </Box>
      <Typography sx={styles.title}>120 баллов</Typography>
    </Box>
  )
}

export default GameResults
