import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ProjectButton from 'components/ProjectButton'
import RadioButtons from 'components/RadioButtons'
import styles from './styles'

const SprintInitial = () => {
  const [pickedLevel, setPickedLevel] = useState('')
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPickedLevel(e.currentTarget.value)
  }
  return (
    <Box component='main' sx={styles.container}>
      <Typography sx={styles.title} component='h1'>
        Спринт
      </Typography>
      <Typography sx={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet, common
        amet cursus proin.
      </Typography>
      <Typography sx={styles.subtitle}>Выберите уровень</Typography>
      <Box sx={styles.options}>
        <RadioButtons />
      </Box>
      <Box sx={styles.button}>
        <ProjectButton width={230} height={50} disabled={!pickedLevel}>
          Начать
        </ProjectButton>
      </Box>
    </Box>
  )
}

export default SprintInitial
