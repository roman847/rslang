import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from 'react-router-dom'
import ProjectButton from 'components/ProjectButton'
import RadioButtons from 'components/RadioButtons'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getWordsChunk } from 'features/audioCall/audioCallSlice'
import Logo from 'components/Logo'
import IconsBlock from 'components/IconsBlock'
import styles from './styles'

const AudioInitial = () => {
  const { level } = useAppSelector((state) => state.audioCall)
  console.log(level)
  const dispatch = useAppDispatch()
  const clickHandler = () => {
    dispatch(getWordsChunk({ page: '0', group: level }))
  }
  return (
    <Box>
      <Box component='header' sx={styles.header}>
        <MenuIcon fontSize='large' sx={styles.menuIcon} />
        <Link component={RouterLink} to='/' sx={styles.link}>
          <Logo />
        </Link>
        <IconsBlock />
      </Box>
      <Box component='main' sx={styles.container}>
        <Typography sx={styles.title} component='h1'>
          Аудиовызов
        </Typography>
        <Typography sx={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
          common amet cursus proin.
        </Typography>
        <Typography sx={styles.subtitle}>Выберите уровень</Typography>
        <Box sx={styles.options}>
          <RadioButtons />
        </Box>
        <Box sx={styles.button}>
          <ProjectButton width={230} height={50} disabled={!level} action={clickHandler}>
            Начать
          </ProjectButton>
        </Box>
      </Box>
    </Box>
  )
}

export default AudioInitial