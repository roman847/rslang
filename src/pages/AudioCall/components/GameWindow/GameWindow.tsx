import React, { useEffect, useState } from 'react'
import { Box, Link, CardMedia, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import { Color, ButtonVariants } from 'core/variables/constants'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import VolumeIcon from 'pages/AudioCall/components/VolumeIcon'
import { updateStore, setBackgroundBorder } from 'features/audioCall/audioCallSlice'
import styles from './styles'

const GameWindow = () => {
  const dispatch = useAppDispatch()
  const { storeWord, storeWordTranslate, storeWordIndex, words } = useAppSelector(
    (state) => state.audioCall,
  )
  const [score, setScore] = useState(0)

  const wordIndex = getRandomIndex(words.length)
  const randomIndex = getRandomIndex(words.length)
  const randomIndex1 = getRandomIndex(words.length)
  const randomIndex2 = getRandomIndex(words.length)
  const randomIndex3 = getRandomIndex(words.length)
  const array = []
  const { word } = words[wordIndex]
  const { wordTranslate } = words[wordIndex]
  array.push(
    wordTranslate,
    words[randomIndex].wordTranslate,
    words[randomIndex1].wordTranslate,
    words[randomIndex2].wordTranslate,
    words[randomIndex3].wordTranslate,
  )
  const shuffle = (array: string[]) => {
    array.sort(() => Math.random() - 0.5)
  }
  shuffle(array)
  const play = () => {
    const click = new Audio(`${process.env.REACT_APP_BASE_URL}/${words[wordIndex].audio} `)
    click.play()
  }

  useEffect(() => {
    if (!storeWord && !storeWordTranslate && storeWordIndex === -1) {
      dispatch(
        updateStore({
          word,
          wordTranslate,
          wordIndex,
        }),
      )
    }
  })

  const correctAnswerHandler = () => {
    dispatch(setBackgroundBorder(Color.correctAnswerBackground))
    setScore(score + 1)
    console.log('правильный ответ')
  }

  const incorrectAnswerHandler = () => {
    console.log('неправильный ответ')
  }
  const [firstName, secondName, thidrname, fourthname, fivename] = array

  const clickHandler1 = () => {
    if (firstName === words[wordIndex].wordTranslate) {
      correctAnswerHandler()
    } else {
      incorrectAnswerHandler()
    }
  }
  const clickHandler2 = () => {
    if (secondName === words[wordIndex].wordTranslate) {
      correctAnswerHandler()
    } else {
      incorrectAnswerHandler()
    }
  }
  const clickHandler3 = () => {
    if (thidrname === words[wordIndex].wordTranslate) {
      correctAnswerHandler()
    } else {
      incorrectAnswerHandler()
    }
  }
  const clickHandler4 = () => {
    if (fourthname === words[wordIndex].wordTranslate) {
      correctAnswerHandler()
    } else {
      incorrectAnswerHandler()
    }
  }
  const clickHandler5 = () => {
    if (fivename === words[wordIndex].wordTranslate) {
      correctAnswerHandler()
    } else {
      incorrectAnswerHandler()
    }
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <CardMedia
          component='img'
          image={`${process.env.REACT_APP_BASE_URL}/${words[wordIndex].image} `}
          alt='image'
          sx={styles.image}
        />

        <Box sx={styles.icon}>
          <Link onClick={play} sx={styles.link}>
            <VolumeIcon />
          </Link>
          <Typography sx={styles.word}>{word}</Typography>
        </Box>
        <Box sx={styles.buttons}>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={Color.blackText}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler1}
          >
            1. {array[0]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={200}
            height={50}
            borderColor={Color.blackText}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler2}
          >
            2. {array[1]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={Color.blackText}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler3}
          >
            3. {array[2]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={Color.blackText}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler4}
          >
            4. {array[3]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={Color.blackText}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler5}
          >
            5. {array[4]}
          </ProjectButton>
        </Box>
        <Box sx={styles.button}>
          <ProjectButton width={230} height={50} buttonColor={Color.primary}>
            Не знаю
          </ProjectButton>
        </Box>
      </Box>
    </Box>
  )
}

export default GameWindow
