import React from 'react'
import { Box } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { GamePhase } from 'features/sprint/sprintSlice'
import SprintInitial from './components/SprintInitial'
import styles from './styles'
import SprintGame from './components/SprintGame'

const Sprint = () => {
  const { gamePhase } = useAppSelector((state) => state.sprint)
  let currentComponent
  if (gamePhase === GamePhase.preparation) {
    currentComponent = <SprintInitial />
  } else {
    currentComponent = <SprintGame />
  }
  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>{currentComponent}</Box>
    </Box>
  )
}

export default Sprint
