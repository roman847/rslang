import React from 'react'
import { Box, Typography } from '@mui/material'
import IconsBlock from 'components/IconsBlock'
import GameWindow from 'pages/AudioCall/components/GameWindow'
import styles from './styles'

const AudioGame = () => {
  return (
    <Box>
      <Box component='header' sx={styles.header}>
        <Box>
          <Typography sx={styles.title}>Аудиовызов</Typography>
          <Typography sx={styles.title}>1/20</Typography>
        </Box>
        <Box>
          <IconsBlock />
        </Box>
      </Box>
      <Box component='main'>
        <GameWindow />
      </Box>
    </Box>
  )
}

export default AudioGame
