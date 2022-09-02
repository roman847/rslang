import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ButtonVariants, Color } from 'core/variables/constants'
import { useAppDispatch } from 'app/hooks'
import { GamePhase, setGamePhase } from 'features/sprint/sprintSlice'
import ProjectButton from 'components/ProjectButton'
import TotalScore from 'components/TotalScore'
import WordsList from 'components/WordsList'
import styles from './styles'

const GameResults = () => {
  const dispatch = useAppDispatch()
  const [firstLinkActive, setFirstLinkActive] = useState(true)
  const [secondLinkActive, setSecondLinkActive] = useState(false)
  const firstOptionStyles = firstLinkActive ? styles.active : styles.link
  const secondOptionStyles = secondLinkActive ? styles.active : styles.link

  const firstLinkClickHandler = () => {
    setFirstLinkActive(true)
    setSecondLinkActive(false)
  }

  const secondLinkClickHandler = () => {
    setFirstLinkActive(false)
    setSecondLinkActive(true)
  }

  let currentComponent
  if (firstLinkActive) {
    currentComponent = <TotalScore />
  } else {
    currentComponent = <WordsList />
  }

  const navigate = useNavigate()
  const clickTextbookHandler = () => {
    navigate('../textbook')
  }
  const continueGameHandler = () => {
    dispatch(setGamePhase(GamePhase.inProcess))
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.header}>
        <Typography sx={firstOptionStyles} onClick={firstLinkClickHandler}>
          Ваш результат
        </Typography>
        <Typography sx={secondOptionStyles} onClick={secondLinkClickHandler}>
          Посмотреть слова
        </Typography>
      </Box>
      {currentComponent}
      <Box sx={styles.buttons}>
        <ProjectButton
          variant={ButtonVariants.secondary}
          width={230}
          height={50}
          hoverColor={Color.secondaryButtonHover}
          action={continueGameHandler}
        >
          Продолжить игру
        </ProjectButton>
        <ProjectButton
          variant={ButtonVariants.secondary}
          width={230}
          height={50}
          hoverColor={Color.secondaryButtonHover}
          action={clickTextbookHandler}
        >
          Перейти в учебник
        </ProjectButton>
      </Box>
    </Box>
  )
}

export default GameResults
