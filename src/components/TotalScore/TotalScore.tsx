import React, { useEffect, useState } from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import { IGameResults } from 'core/interfaces/propsInterfaces'
import { GameType } from 'core/variables/constants'
import { useAppSelector } from 'app/hooks'
import styles from './styles'

const TotalScore = ({ gameType }: IGameResults) => {
  const sprintScore = useAppSelector((state) => state.sprint.score)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (gameType === GameType.Sprint) {
      setScore(sprintScore)
    } else {
      setScore(0)
    }
  })

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
