import React from 'react'
import { Typography, Box } from '@mui/material'
import clsx from 'clsx'
import RadioButton from 'components/RadioButton/RadioButtn'
import style from './statisticAllTime.module.scss'

const StatisticAllTime = () => {
  return (
    <div className={clsx('container', style.container__content)}>
      <Typography variant='h2' className='title__accent'>
        Статистика за все время
      </Typography>
      <Box className={style.radioButtons__block}>
        <RadioButton id='radioFirst' name='category' text='Количество изученных слов' />
        <RadioButton id='radioSecond' name='category' text='Прогресс' />
      </Box>
    </div>
  )
}

export default StatisticAllTime
