import React from 'react'
import { Box, Typography } from '@mui/material'
import WatchIcon from 'pages/Sprint/components/WatchIcon'
import ProjectButton from 'components/ProjectButton'
import { Color } from 'core/variables/constants'
import { useAppSelector } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import styles from './styles'

const GameWindow = () => {
  const { words } = useAppSelector((state) => state.sprint)
  const wordIndex = getRandomIndex(words.length)
  const randomIndex = getRandomIndex(words.length)
  const { word } = words[wordIndex]
  const { wordTranslate } = Math.random() > 0.5 ? words[randomIndex] : words[wordIndex]
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
        <Typography sx={styles.title}>{word}</Typography>
        <Typography sx={styles.subtitle}>{wordTranslate}</Typography>
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
