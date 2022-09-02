import React from 'react'
import { Box, Typography } from '@mui/material'
import IconsBlock from 'components/IconsBlock'
import Container from 'components/Container'
import { useAppSelector } from 'app/hooks'
import { GamePhase } from 'features/sprint/sprintSlice'
import GameContent from 'pages/Sprint/components/GameContent'
import GameResults from 'components/GameResults'
import { GameType } from 'core/variables/constants'
import styles from './styles'

const SprintGeneral = () => {
  const { gamePhase } = useAppSelector((state) => state.sprint)
  let currentComponent
  let width = 630
  let height = 550
  if (gamePhase === GamePhase.inProcess) {
    currentComponent = <GameContent />
    width = 770
    height = 530
  } else if (gamePhase === GamePhase.results) {
    currentComponent = <GameResults gameType={GameType.Sprint} />
  }
  return (
    <Box>
      <Box component='header' sx={styles.header}>
        <Typography sx={styles.title}>Спринт</Typography>
        <IconsBlock />
      </Box>
      <Box component='main'>
        <Container width={width} height={height}>
          {currentComponent}
        </Container>
      </Box>
    </Box>
  )
}

export default SprintGeneral
