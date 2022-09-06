import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import WordsList from 'components/WordsListAudio'
import { ButtonVariants, Color, GameType, Pages } from 'core/variables/constants'
import { useAppDispatch } from 'app/hooks'
import { GamePhase, prepareToContinue, setGamePhase } from 'features/audioCall/audioCallSlice'
import ProjectButton from 'components/ProjectButton'
import TotalScoreAudio from 'components/TotalScoreAudio'
import { IGameResults } from 'core/interfaces/propsInterfaces'
import styles from './styles'

const GameResultsAudio = ({ gameType }: IGameResults) => {
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

  const [currentComponent, setCurrentComponent] = useState(<TotalScoreAudio gameType={gameType} />)

  useEffect(() => {
    if (firstLinkActive) {
      setCurrentComponent(<TotalScoreAudio gameType={gameType} />)
    } else {
      setCurrentComponent(<WordsList gameType={gameType} />)
    }
  }, [firstLinkActive])

  const navigate = useNavigate()
  const clickTextbookHandler = () => {
    navigate(Pages.textbook)
  }

  let action: () => void
  if (gameType === GameType.Sprint) {
    action = () => {
      dispatch(setGamePhase(GamePhase.inProcess))
      dispatch(prepareToContinue())
    }
  } else {
    action = () => {
      /* placeholder */
    }
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
          action={action}
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

export default GameResultsAudio
