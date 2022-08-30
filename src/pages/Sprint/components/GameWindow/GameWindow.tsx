import React from 'react'
import { Box, Typography } from '@mui/material'
import WatchIcon from 'pages/Sprint/components/WatchIcon'
import ProjectButton from 'components/ProjectButton'
import { Color } from 'core/variables/constants'
import styles from './styles'

const GameWindow = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.timeInfo}>
          <WatchIcon />
          <Typography sx={styles.timeInfo__text}>60 секунд</Typography>
        </Box>
        <Box sx={styles.gameInfo}>
          <Typography sx={styles.gameInfo__text}>0 баллов</Typography>
          <Typography sx={styles.gameInfo__text}>X 1 (+10)</Typography>
        </Box>
        <Typography sx={styles.title}>thing</Typography>
        <Typography sx={styles.subtitle}>вещь</Typography>
        <Box sx={styles.buttons}>
          <ProjectButton width={230} height={50} buttonColor={Color.error}>
            Неверно
          </ProjectButton>
          <ProjectButton width={230} height={50} buttonColor={Color.secondary}>
            Верно
          </ProjectButton>
        </Box>
      </Box>
    </Box>
  )
}

export default GameWindow
