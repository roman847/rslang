import React from 'react'
import { Box, Typography } from '@mui/material'
import IconsBlock from 'components/IconsBlock'
import GameWindow from 'pages/Sprint/components/GameWindow'
import styles from './styles'

const SprintGame = () => {
  return (
    <Box>
      <Box component='header' sx={styles.header}>
        <Typography sx={styles.title}>Спринт</Typography>
        <IconsBlock />
      </Box>
      <Box component='main'>
        <GameWindow />
      </Box>
    </Box>
  )
}

export default SprintGame
