import React, { useEffect, useState } from 'react'
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

  const [currentComponent, setCurrentComponent] = useState(<></>)
  const [width, setWidth] = useState(630)
  const [height, setHeight] = useState(550)

  useEffect(() => {
    if (gamePhase === GamePhase.inProcess) {
      setCurrentComponent(<GameContent />)
      setWidth(770)
      setHeight(530)
    } else {
      setCurrentComponent(<GameResults gameType={GameType.Sprint} />)
      setWidth(630)
      setHeight(550)
    }
  }, [gamePhase])

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
