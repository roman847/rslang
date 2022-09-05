import React, { useEffect, useState } from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import { IGameResults } from 'core/interfaces/propsInterfaces'
import { GameType } from 'core/variables/constants'
import { useAppSelector } from 'app/hooks'
import styles from './styles'

const TotalScoreAudio = ({ gameType }: IGameResults) => {
  const { score: audioScore } = useAppSelector((state) => state.audioCall)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (gameType === GameType.AudioCall) {
      setScore(audioScore)
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
      <Typography sx={styles.subtitle}>{score * 5}% изученных слов</Typography>
    </Box>
  )
}

export default TotalScoreAudio
