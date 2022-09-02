import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import { Color } from 'core/variables/constants'
import Timer from 'pages/Sprint/components/Timer'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import {
  addRightAnswer,
  addWrongAnswer,
  setBackground,
  updateStore,
} from 'features/sprint/sprintSlice'
import styles from './styles'

const GameContent = () => {
  const dispatch = useAppDispatch()
  const { storeWord, storeWordTranslate, storeWordIndex, words } = useAppSelector(
    (state) => state.sprint,
  )
  const [disabled, setDisabled] = useState(false)

  const getGameData = () => {
    const wordIndex = getRandomIndex(words.length)
    const randomIndex = getRandomIndex(words.length)
    const { word } = words[wordIndex]
    const { wordTranslate } = Math.random() > 0.5 ? words[randomIndex] : words[wordIndex]
    return { word, wordTranslate, wordIndex, randomIndex }
  }

  const gameData = getGameData()

  if (!storeWord && !storeWordTranslate && storeWordIndex === -1) {
    dispatch(
      updateStore({
        word: gameData.word,
        wordTranslate: gameData.wordTranslate,
        wordIndex: gameData.wordIndex,
      }),
    )
  }

  const word = storeWord ? storeWord : gameData.word
  const wordTranslate = storeWordTranslate ? storeWordTranslate : gameData.wordTranslate
  const wordIndex = storeWordIndex ? storeWordIndex : gameData.wordIndex

  const correctAnswerHandler = () => {
    dispatch(setBackground(Color.correctAnswerBackground))
    setDisabled(true)
    setTimeout(() => {
      dispatch(addRightAnswer(words[wordIndex].id))
      dispatch(
        updateStore({
          word: gameData.word,
          wordTranslate: gameData.wordTranslate,
          wordIndex: gameData.wordIndex,
        }),
      )
      setDisabled(false)
    }, 500)
  }

  const incorrectAnswerHandler = () => {
    dispatch(setBackground(Color.incorrectAnswerBackground))
    setDisabled(true)
    setTimeout(() => {
      dispatch(addWrongAnswer(words[wordIndex].id))
      dispatch(
        updateStore({
          word: gameData.word,
          wordTranslate: gameData.wordTranslate,
          wordIndex: gameData.wordIndex,
        }),
      )
      setDisabled(false)
    }, 500)
  }

  const correctClickHandler = () => {
    if (wordTranslate === words[wordIndex].wordTranslate) {
      correctAnswerHandler()
    } else {
      incorrectAnswerHandler()
    }
  }

  const incorrectClickHandler = () => {
    if (wordTranslate === words[wordIndex].wordTranslate) {
      incorrectAnswerHandler()
    } else {
      correctAnswerHandler()
    }
  }
  return (
    <Box sx={styles.wrapper}>
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
          disabled={disabled}
        >
          Неверно
        </ProjectButton>
        <ProjectButton
          width={230}
          height={50}
          buttonColor={Color.secondary}
          action={correctClickHandler}
          disabled={disabled}
        >
          Верно
        </ProjectButton>
      </Box>
    </Box>
  )
}

export default GameContent
