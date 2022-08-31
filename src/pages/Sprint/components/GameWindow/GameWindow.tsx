import React from 'react'
import { Box, Typography } from '@mui/material'
import WatchIcon from 'pages/Sprint/components/WatchIcon'
import ProjectButton from 'components/ProjectButton'
import { Color } from 'core/variables/constants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import { addRightAnswer, addWrongAnswer } from 'features/sprint/sprintSlice'
import styles from './styles'

const GameWindow = () => {
  const dispatch = useAppDispatch()
  const { words } = useAppSelector((state) => state.sprint)

  const getGameData = () => {
    const wordIndex = getRandomIndex(words.length)
    const randomIndex = getRandomIndex(words.length)
    const { word } = words[wordIndex]
    const { wordTranslate } = Math.random() > 0.5 ? words[randomIndex] : words[wordIndex]
    return { word, wordTranslate, wordIndex, randomIndex }
  }

  const { word, wordTranslate, wordIndex } = getGameData()

  const correctClickHandler = () => {
    if (wordTranslate === words[wordIndex].wordTranslate) {
      dispatch(addRightAnswer(words[wordIndex].id))
    } else {
      dispatch(addWrongAnswer(words[wordIndex].id))
    }
  }

  const incorrectClickHandler = () => {
    if (wordTranslate === words[wordIndex].wordTranslate) {
      dispatch(addWrongAnswer(words[wordIndex].id))
    } else {
      dispatch(addRightAnswer(words[wordIndex].id))
    }
    getGameData()
  }

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
          <ProjectButton
            width={230}
            height={50}
            buttonColor={Color.error}
            action={incorrectClickHandler}
          >
            Неверно
          </ProjectButton>
          <ProjectButton
            width={230}
            height={50}
            buttonColor={Color.secondary}
            action={correctClickHandler}
          >
            Верно
          </ProjectButton>
        </Box>
      </Box>
    </Box>
  )
}

export default GameWindow
