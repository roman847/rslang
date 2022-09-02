import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import { IGameResults } from 'core/interfaces/propsInterfaces'
import { GameType } from 'core/variables/constants'
import { useAppSelector } from 'app/hooks'
import styles from './styles'

const TotalScore = ({ gameType }: IGameResults) => {
  let score: number
  if (gameType === GameType.Sprint) {
    score = useAppSelector((state) => state.sprint.score)
  } else {
    score = 0
  }
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>{score} баллов</Typography>
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
