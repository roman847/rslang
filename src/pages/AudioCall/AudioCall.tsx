import React from 'react'
import { Box } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { GamePhase } from 'features/audioCall/audioCallSlice'
import AudioInitial from './components/AudioInitial'
import AudioGeneral from './components/AudioGeneral'
import LoadingGame from './components/LoadingGame'
import styles from './styles'

const AudioCall = () => {
  const { gamePhase } = useAppSelector((state) => state.audioCall)

  let currentComponent
  if (gamePhase === GamePhase.preparation) {
    currentComponent = <AudioInitial />
  } else if (gamePhase === GamePhase.loading) {
    currentComponent = <LoadingGame />
  } else {
    currentComponent = <AudioGeneral />
  }
  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>{currentComponent}</Box>
    </Box>
  )
}
export default AudioCall
