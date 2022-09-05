import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import useEventListener from '@use-it/event-listener'
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
  increaseScore,
  resetWinStreak,
} from 'features/sprint/sprintSlice'
import styles from './styles'

const GameContent = () => {
  const dispatch = useAppDispatch()
  const { storeWord, storeWordTranslate, storeWordIndex, words, score, multiplier } =
    useAppSelector((state) => state.sprint)
  const [disabled, setDisabled] = useState(false)

  const getGameData = () => {
    const wordIndex = getRandomIndex(words.length)
    const randomIndex = getRandomIndex(words.length)
    const { word } = words[wordIndex]
    const { wordTranslate } = Math.random() > 0.5 ? words[randomIndex] : words[wordIndex]
    return { word, wordTranslate, wordIndex, randomIndex }
  }

  const gameData = getGameData()

  useEffect(() => {
    if (!storeWord && !storeWordTranslate && storeWordIndex === -1) {
      dispatch(
        updateStore({
          word: gameData.word,
          wordTranslate: gameData.wordTranslate,
          wordIndex: gameData.wordIndex,
        }),
      )
    }
  })

  const word = storeWord
  const wordTranslate = storeWordTranslate
  const wordIndex = storeWordIndex

  const correctAnswerHandler = () => {
    dispatch(setBackground(Color.correctAnswerBackground))
    setDisabled(true)
    dispatch(increaseScore())
    setTimeout(() => {
      dispatch(addRightAnswer(words[wordIndex]))
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
    dispatch(resetWinStreak())
    setTimeout(() => {
      dispatch(addWrongAnswer(words[wordIndex]))
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

  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.code === 'ArrowRight') {
      correctClickHandler()
    } else if (e.code === 'ArrowLeft') {
      incorrectClickHandler()
    }
  })

  return (
    <Box sx={styles.wrapper}>
      <Timer />
      <Box sx={styles.gameInfo}>
        <Typography sx={styles.gameInfo__text}>{score} баллов</Typography>
        <Typography sx={styles.gameInfo__text}>
          X {multiplier} (+{multiplier * 10})
        </Typography>
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
