import React from 'react'
import { Box, Link } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import { Color, ButtonVariants } from 'core/variables/constants'
import { useAppSelector } from 'app/hooks'
import getRandomIndex from 'core/functions/getRandomIndex'
import VolumeIcon from 'pages/AudioCall/components/VolumeIcon'
import styles from './styles'

const GameWindow = () => {
  const { words } = useAppSelector((state) => state.audioCall)
  const wordIndex = getRandomIndex(words.length)
  const randomIndex = getRandomIndex(words.length)
  const randomIndex1 = getRandomIndex(words.length)
  const randomIndex2 = getRandomIndex(words.length)
  const randomIndex3 = getRandomIndex(words.length)
  const array = []
  const { wordTranslate: word1 } = words[wordIndex]
  array.push(
    word1,
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
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.icon}>
          <Link onClick={play} sx={styles.link}>
            <VolumeIcon />
          </Link>
        </Box>
        <Box sx={styles.buttons}>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            1. {array[0]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            2. {array[1]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            3. {array[2]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
          >
            4. {array[3]}
          </ProjectButton>
          <ProjectButton
            variant={ButtonVariants.secondary}
            width={200}
            height={50}
            hoverColor={Color.secondaryButtonHover}
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
