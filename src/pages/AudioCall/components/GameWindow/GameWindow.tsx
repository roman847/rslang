import React from 'react'
import { Box, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import { Color } from 'core/variables/constants'
import { useAppSelector } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import VolumeIcon from 'pages/AudioCall/components/VolumeIcon'
import styles from './styles'

const GameWindow = () => {
  const { words } = useAppSelector((state) => state.audioCall)
  const wordIndex = getRandomIndex(words.length)
  const randomIndex = getRandomIndex(words.length)
  const { word } = words[wordIndex]
  console.log(word)
  const { wordTranslate } = Math.random() > 0.5 ? words[randomIndex] : words[wordIndex]
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.icon}>
          <VolumeIcon />
        </Box>
        <Typography sx={styles.title}>{word}</Typography>
        <Typography sx={styles.subtitle}>{wordTranslate}</Typography>
        <Box sx={styles.buttons}>
          <ProjectButton width={200} height={50} borderColor={Color.error}>
            слово
          </ProjectButton>
          <ProjectButton width={200} height={50} buttonColor={Color.pageBackground}>
            слово
          </ProjectButton>
          <ProjectButton width={200} height={50} buttonColor={Color.pageBackground}>
            слово
          </ProjectButton>
          <ProjectButton width={200} height={50} buttonColor={Color.pageBackground}>
            слово
          </ProjectButton>
          <ProjectButton width={200} height={50} buttonColor={Color.pageBackground}>
            слово
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
