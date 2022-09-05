import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { Pages } from 'core/variables/constants'
import { styles } from './Opportunities.styles'

const Opportunities = () => {
  const navigate = useNavigate()
  const clickFirstCardHandler = () => navigate(Pages.textbook)
  const clickSecondCardHandler = () => navigate(Pages.sprint)
  const clickThirdCardHandler = () => navigate(Pages.statistics)
  const clickFourthCardHandler = () => navigate(Pages.audio)
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.section__header}>Наши возможности</Typography>
      <Box sx={styles.cards}>
        <Box sx={styles.card}>
          <Box
            sx={{ ...styles.firstImg, ...styles.card__img }}
            onClick={clickFirstCardHandler}
          ></Box>
          <Typography sx={styles.card__header} onClick={clickFirstCardHandler}>
            Учебник
          </Typography>
          <Typography sx={styles.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box
            sx={{ ...styles.secondImg, ...styles.card__img }}
            onClick={clickSecondCardHandler}
          ></Box>
          <Typography sx={styles.card__header} onClick={clickSecondCardHandler}>
            Спринт
          </Typography>
          <Typography sx={styles.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box
            sx={{ ...styles.thirdImg, ...styles.card__img }}
            onClick={clickThirdCardHandler}
          ></Box>
          <Typography sx={styles.card__header} onClick={clickThirdCardHandler}>
            Статистика
          </Typography>
          <Typography sx={styles.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box
            sx={{ ...styles.fourthImg, ...styles.card__img }}
            onClick={clickFourthCardHandler}
          ></Box>
          <Typography sx={styles.card__header} onClick={clickFourthCardHandler}>
            Аудиовызов
          </Typography>
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
