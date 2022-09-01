import React from 'react'
import { Box } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { GamePhase } from 'features/sprint/sprintSlice'
import GameResults from 'components/GameResults'
import SprintInitial from './components/SprintInitial'
import styles from './styles'
import SprintGame from './components/SprintGame'
import LoadingGame from './components/LoadingGame'

const Sprint = () => {
  const { gamePhase } = useAppSelector((state) => state.sprint)
  let currentComponent
  if (gamePhase === GamePhase.preparation) {
    currentComponent = <SprintInitial />
  } else if (gamePhase === GamePhase.loading) {
    currentComponent = <LoadingGame />
  } else if (gamePhase === GamePhase.inProcess) {
    currentComponent = <SprintGame />
  } else if (gamePhase === GamePhase.results) {
    currentComponent = <GameResults />
  }
  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>{currentComponent}</Box>
    </Box>
  )
}

export default Sprint
