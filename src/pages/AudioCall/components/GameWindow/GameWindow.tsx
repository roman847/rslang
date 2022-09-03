import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import { Color, ButtonVariants } from 'core/variables/constants'
import { useAppSelector } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import VolumeIcon from 'pages/AudioCall/components/VolumeIcon'
import styles from './styles'

const GameWindow = () => {
  const { words } = useAppSelector((state) => state.audioCall)
  console.log(words)
  const wordIndex = getRandomIndex(words.length)
  const randomIndex = getRandomIndex(words.length)
  const { audioMeaning } = words[wordIndex]
  console.log(audioMeaning)
  const { wordTranslate } = Math.random() > 0.5 ? words[randomIndex] : words[wordIndex]
  const play = () => {
    const click = new Audio(audioMeaning)
    click.play()
  }
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.icon}>
          <Link onClick={play} sx={styles.link}>
            <VolumeIcon />
          </Link>
        </Box>
        <Typography sx={styles.title}>{audioMeaning}</Typography>
        <Typography sx={styles.subtitle}>{wordTranslate}</Typography>
        <Box sx={styles.buttons}>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={300}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            1. {wordTranslate}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={300}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            2. {wordTranslate}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={300}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            3. {wordTranslate}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={300}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            4. {wordTranslate}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={300}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            5. {wordTranslate}
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
