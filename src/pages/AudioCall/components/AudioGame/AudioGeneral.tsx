import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import IconsBlock from 'components/IconsBlock'
import GameContent from 'pages/AudioCall/components/GameContent'
import GameResults from 'components/GameResults'
import { useAppSelector } from 'app/hooks'
import { GamePhase } from 'features/audioCall/audioCallSlice'
import { GameType } from 'core/variables/constants'
import Container from 'components/Container'
import styles from './styles'

const AudioGeneral = () => {
  const { score, gamePhase } = useAppSelector((state) => state.audioCall)

  const [currentComponent, setCurrentComponent] = useState(<></>)
  const [width, setWidth] = useState(630)
  const [height, setHeight] = useState(550)

  useEffect(() => {
    if (gamePhase === GamePhase.inProcess) {
      setCurrentComponent(<GameContent />)
    } else {
      setCurrentComponent(<GameResults gameType={GameType.AudioCall} />)
      setWidth(630)
      setHeight(550)
    }
  }, [gamePhase])

  return (
    <Box>
      <Box component='header' sx={styles.header}>
        <Box>
          <Typography sx={styles.title}>Аудиовызов</Typography>
          <Typography sx={styles.title}>{score}/20</Typography>
        </Box>
        <Box>
          <IconsBlock />
        </Box>
      </Box>
      <Box component='main'>
        <Container width={width} height={height}>
          {currentComponent}
        </Container>
      </Box>
    </Box>
  )
}

export default AudioGeneral
