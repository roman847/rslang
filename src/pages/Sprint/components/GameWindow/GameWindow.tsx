import React from 'react'
import { Box, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import { Color } from 'core/variables/constants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import { addRightAnswer, addWrongAnswer } from 'features/sprint/sprintSlice'
import Timer from '../Timer'
import styles from './styles'

const GameWindow = () => {
  const dispatch = useAppDispatch()
  const { words } = useAppSelector((state) => state.sprint)

  const getGameData = () => {
    const wordIndex = getRandomIndex(words.length)
    const randomIndex = getRandomIndex(words.length)
    const { word } = words[wordIndex]
    const { wordTranslate } = Math.random() > 0.5 ? words[randomIndex] : words[wordIndex]
    console.log('word: ', word)
    console.log('wordTranslate: ', wordTranslate)
    console.log('wordIndex: ', wordIndex)
    console.log('randomIndex: ', randomIndex)
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
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Timer />
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
