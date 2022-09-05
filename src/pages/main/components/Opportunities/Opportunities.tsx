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
            В нашем учебнике находится более 3600 слов. К каждому слову прилагается
            транскрипция,предложение с примером, аудиозапись с произношением слова и примера
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box sx={{ ...styles.secondImg, ...styles.card__img }}></Box>
          <Typography sx={styles.card__header}>Словарь</Typography>
          <Typography sx={styles.card__description}>
            Словарь содержит наиболее часто употребляемые слова в коммуникации в разных обстановках
            и ситуациях
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box sx={{ ...styles.thirdImg, ...styles.card__img }}></Box>
          <Typography sx={styles.card__header}>Статистика</Typography>
          <Typography sx={styles.card__description}>
            На странице статистики отображается прогресс обучения, ежедненый прогрес а также за все
            время. Данные указаны в соответствующей диаграмме
          </Typography>
        </Box>
        <Box sx={styles.card}>
          <Box sx={{ ...styles.fourthImg, ...styles.card__img }}></Box>
          <Typography sx={styles.card__header}>Игры</Typography>
          <Typography sx={styles.card__description}>
            Проверить свои силы можно, сыграя в познавательные игры такие, как Спринт и Аудиозапись
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Opportunities
