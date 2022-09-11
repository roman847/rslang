import React, { useEffect } from 'react'
import { Box, Link, CardMedia, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import { Color, ButtonVariants } from 'core/variables/constants'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import VolumeIcon from 'pages/AudioCall/components/VolumeIcon'
import {
  updateStore,
  setBorder1,
  setBorder2,
  setBorder3,
  setBorder4,
  setBorder5,
  increaseScore,
  addRightAnswer,
  addWrongAnswer,
  setGamePhase,
  GamePhase,
} from 'features/audioCall/audioCallSlice'
import styles from './styles'

const GameWindow = () => {
  const dispatch = useAppDispatch()

  const {
    // storeWord,
    // storeWordTranslate,
    // storeWordIndex,
    words,
    borderColor1,
    borderColor2,
    borderColor3,
    borderColor4,
    borderColor5,
    borderSize1,
    borderSize2,
    borderSize3,
    borderSize4,
    borderSize5,
    borderStyle,
    wrongAnswers,
    rightAnswers,
  } = useAppSelector((state) => state.audioCall)

  const wordIndex = getRandomIndex(words.length)
  const randomIndex1 = getRandomIndex(words.length)
  const randomIndex2 = getRandomIndex(words.length)
  const randomIndex3 = getRandomIndex(words.length)
  const randomIndex4 = getRandomIndex(words.length)
  const array = []
  const { word } = words[wordIndex]
  const { wordTranslate } = words[wordIndex]
  array.push(
    wordTranslate,
    words[randomIndex1].wordTranslate,
    words[randomIndex2].wordTranslate,
    words[randomIndex3].wordTranslate,
    words[randomIndex4].wordTranslate,
  )
  const shuffle = (array: string[]) => {
    array.sort(() => Math.random() - 0.5)
  }
  shuffle(array)

  const play = () => {
    const click = new Audio(`${process.env.REACT_APP_BASE_URL}/${words[wordIndex].audio} `)
    click.play()
  }

  // useEffect(() => {
  //   if (!storeWord && !storeWordTranslate && storeWordIndex === -1) {
  //     dispatch(
  //       updateStore({
  //         word,
  //         wordTranslate,
  //         wordIndex,
  //       }),
  //     )
  //   }
  // })

  useEffect(() => {
    if (!rightAnswers.length) {
      return
    } else if (!wrongAnswers.length) {
      return
    } else if (rightAnswers.length + wrongAnswers.length > 19) {
      dispatch(setGamePhase(GamePhase.results))
    } else return
  })

  const correctAnswerHandler = () => {
    dispatch(increaseScore())
    dispatch(addRightAnswer(words[wordIndex]))
    setTimeout(() => {
      dispatch(
        updateStore({
          borderColor1: Color.blackText,
          borderColor2: Color.blackText,
          borderColor3: Color.blackText,
          borderColor4: Color.blackText,
          borderColor5: Color.blackText,
          borderSize1: '1px',
          borderSize2: '1px',
          borderSize3: '1px',
          borderSize4: '1px',
          borderSize5: '1px',
        }),
      )
    }, 100)
  }

  const incorrectAnswerHandler = () => {
    dispatch(addWrongAnswer(words[wordIndex]))
    setTimeout(() => {
      dispatch(
        updateStore({
          borderColor1: Color.blackText,
          borderColor2: Color.blackText,
          borderColor3: Color.blackText,
          borderColor4: Color.blackText,
          borderColor5: Color.blackText,
          borderSize1: '1px',
          borderSize2: '1px',
          borderSize3: '1px',
          borderSize4: '1px',
          borderSize5: '1px',
        }),
      )
    }, 100)
  }
  const [firstName, secondName, thidrname, fourthname, fivename] = array

  const clickHandler1 = () => {
    if (firstName === words[wordIndex].wordTranslate) {
      dispatch(setBorder1({ borderColor1: Color.secondary, borderSize1: '4px' }))
      correctAnswerHandler()
    } else {
      dispatch(setBorder1({ borderColor1: Color.error, borderSize1: '4px' }))
      incorrectAnswerHandler()
    }
  }
  const clickHandler2 = () => {
    if (secondName === words[wordIndex].wordTranslate) {
      dispatch(setBorder2({ borderColor2: Color.secondary, borderSize2: '4px' }))
      correctAnswerHandler()
    } else {
      dispatch(setBorder2({ borderColor2: Color.error, borderSize2: '4px' }))
      incorrectAnswerHandler()
    }
  }
  const clickHandler3 = () => {
    if (thidrname === words[wordIndex].wordTranslate) {
      dispatch(setBorder3({ borderColor3: Color.secondary, borderSize3: '4px' }))
      correctAnswerHandler()
    } else {
      dispatch(setBorder3({ borderColor3: Color.error, borderSize3: '4px' }))
      incorrectAnswerHandler()
    }
  }
  const clickHandler4 = () => {
    if (fourthname === words[wordIndex].wordTranslate) {
      dispatch(setBorder4({ borderColor4: Color.secondary, borderSize4: '4px' }))
      correctAnswerHandler()
    } else {
      dispatch(setBorder4({ borderColor4: Color.error, borderSize4: '4px' }))
      incorrectAnswerHandler()
    }
  }
  const clickHandler5 = () => {
    if (fivename === words[wordIndex].wordTranslate) {
      dispatch(setBorder5({ borderColor5: Color.secondary, borderSize5: '4px' }))
      correctAnswerHandler()
    } else {
      dispatch(setBorder5({ borderColor5: Color.error, borderSize5: '4px' }))
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
        ,
        <Box sx={styles.icon}>
          <Link onClick={play} sx={styles.link}>
            <VolumeIcon />
          </Link>
          <Typography sx={styles.word}>{word}</Typography>
        </Box>
        <Box sx={styles.buttons}>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={borderColor1}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler1}
            borderWidth={borderSize1}
            borderStyle={borderStyle}
          >
            1. {array[0]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={200}
            height={50}
            borderColor={borderColor2}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler2}
            borderWidth={borderSize2}
            borderStyle={borderStyle}
          >
            2. {array[1]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={borderColor3}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler3}
            borderWidth={borderSize3}
            borderStyle={borderStyle}
          >
            3. {array[2]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={borderColor4}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler4}
            borderWidth={borderSize4}
            borderStyle={borderStyle}
          >
            4. {array[3]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            borderColor={borderColor5}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
            action={clickHandler5}
            borderWidth={borderSize5}
            borderStyle={borderStyle}
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
