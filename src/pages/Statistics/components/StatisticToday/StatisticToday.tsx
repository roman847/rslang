import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import ItemList from 'pages/Statistics/components/ItemList'
import style from './statistic.module.scss'

const StatisticMainContent = () => {
  return (
    <Box className={clsx('container', style.container__statistic)}>
      <Typography variant='h2' className='title__accent'>
        Статистика за сегодня
      </Typography>
      <Box className={style.main__content}>
        <Box className={style.content__item}>
          <Typography className={style.item__progress}>0</Typography>
          <Typography className={style.item__description}>Слов изучено</Typography>
        </Box>
        <Box className={style.content__item}>
          <Typography className={style.item__progress}>0</Typography>
          <Typography className={style.item__description}>Новые слова</Typography>
        </Box>
        <Box className={style.content__item}>
          <Typography className={style.item__progress}>0%</Typography>
          <Typography className={style.item__description}>Правильных ответов</Typography>
        </Box>
        <Box className={style.content__item}>
          <Typography className={style.item__title}>Спринт</Typography>
          <ItemList />
        </Box>
        <Box className={style.content__item}>
          <Typography className={style.item__title}>Аудиовызов</Typography>
          <ItemList />
        </Box>
      </Box>
    </Box>
  )
}

export default StatisticMainContent
