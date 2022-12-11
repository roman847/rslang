import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useAppSelector } from 'app/hooks'
import { GamePhase } from 'features/sprint/sprintSlice'
import SprintInitial from 'pages/Sprint/components/SprintInitial'
import SprintGeneral from 'pages/Sprint/components/SprintGeneral'
import LoadingScreen from 'pages/Sprint/components/LoadingScreen'
import styles from './styles'

const Sprint = () => {
  const { gamePhase } = useAppSelector((state) => state.sprint)
  const [currentComponent, setCurrentComponent] = useState(<SprintGeneral />)

  useEffect(() => {
    if (gamePhase === GamePhase.preparation) {
      setCurrentComponent(<SprintInitial />)
    } else if (gamePhase === GamePhase.loading) {
      setCurrentComponent(<LoadingScreen />)
    } else {
      setCurrentComponent(<SprintGeneral />)
    }
  }, [gamePhase])

  return (
    <Box sx={styles.main}>
      <Box sx={styles.wrapper}>{currentComponent}</Box>
    </Box>
  )
}

export default Sprint
