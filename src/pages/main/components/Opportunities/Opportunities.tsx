import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styles } from './Opportunities.styles'

const Opportunities = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.section__header}>Наши возможности</Typography>
      <Box sx={styles.cards}>
        <Box sx={styles.card}>
          <Box sx={{ ...styles.firstImg, ...styles.card__img }}></Box>
          <Typography sx={styles.card__header}>Учебник</Typography>
          <Typography sx={styles.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box sx={{ ...styles.secondImg, ...styles.card__img }}></Box>
          <Typography sx={styles.card__header}>Словарь</Typography>
          <Typography sx={styles.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box sx={{ ...styles.thirdImg, ...styles.card__img }}></Box>
          <Typography sx={styles.card__header}>Статистика</Typography>
          <Typography sx={styles.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box sx={{ ...styles.fourthImg, ...styles.card__img }}></Box>
          <Typography sx={styles.card__header}>Игры</Typography>
          <Typography sx={styles.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Opportunities
