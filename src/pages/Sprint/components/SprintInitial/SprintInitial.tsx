import React from 'react'
import { Box, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import RadioButtons from 'components/RadioButtons'
import Sidebar from 'components/Sidebar'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getWordsChunk } from 'features/sprint/sprintSlice'
import IconsBlock from 'components/IconsBlock'
import styles from './styles'

const SprintInitial = () => {
  const { level } = useAppSelector((state) => state.sprint)
  const dispatch = useAppDispatch()
  const clickHandler = () => {
    dispatch(getWordsChunk({ page: '0', group: level }))
  }
  return (
    <Box>
      <Box component='header' sx={styles.header}>
        <Sidebar />

        <IconsBlock />
      </Box>
      <Box component='main' sx={styles.container}>
        <Typography sx={styles.title} component='h1'>
          Спринт
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

export default SprintInitial
