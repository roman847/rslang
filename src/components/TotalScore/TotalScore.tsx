import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import styles from './styles'

const TotalScore = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>120 баллов</Typography>
      <Box sx={styles.progressBar}>
        <LinearProgress
          color='inherit'
          sx={styles.progressBar__scale}
          variant='determinate'
          value={80}
        />
      </Box>
      <Typography sx={styles.subtitle}>80% изученных слов</Typography>
    </Box>
  )
}

export default TotalScore
