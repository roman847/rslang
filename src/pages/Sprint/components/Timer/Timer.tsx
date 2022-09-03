import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import WatchIcon from 'pages/Sprint/components/WatchIcon'
import { useAppDispatch } from 'app/hooks'
import { GamePhase, setGamePhase } from 'features/sprint/sprintSlice'
import styles from './styles'

const Timer = () => {
  const dispatch = useAppDispatch()
  const [seconds, setSeconds] = useState(60)
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else {
        clearInterval(myInterval)
        dispatch(setGamePhase(GamePhase.results))
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  }, [seconds])
  return (
    <Box sx={styles.timeInfo}>
      <WatchIcon />
      <Typography sx={styles.timeInfo__text}>{seconds} секунд</Typography>
    </Box>
  )
}

export default Timer
