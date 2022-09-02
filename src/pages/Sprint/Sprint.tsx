import React from 'react'
import { Box } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { GamePhase } from 'features/sprint/sprintSlice'
import SprintInitial from 'pages/Sprint/components/SprintInitial'
import SprintGeneral from 'pages/Sprint/components/SprintGeneral'
import LoadingScreen from 'pages/Sprint/components/LoadingScreen'
import styles from './styles'

const Sprint = () => {
  const { gamePhase } = useAppSelector((state) => state.sprint)
  let currentComponent
  if (gamePhase === GamePhase.preparation) {
    currentComponent = <SprintInitial />
  } else if (gamePhase === GamePhase.loading) {
    currentComponent = <LoadingScreen />
  } else {
    currentComponent = <SprintGeneral />
  }
  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>{currentComponent}</Box>
    </Box>
  )
}

export default Sprint
