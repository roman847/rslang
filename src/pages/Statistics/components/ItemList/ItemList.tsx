import React from 'react'
import { Typography } from '@mui/material'
import style from './itemList.module.scss'

const ItemList = () => {
  return (
    <div>
      <ul className={style.item__list}>
        <li className={style.list__item}>
          <Typography className={style.list__textContent}>Изучено слов:</Typography>
          <Typography className={style.list__value}>0</Typography>
        </li>
        <li className={style.list__item}>
          <Typography className={style.list__textContent}>Правильных ответов:</Typography>
          <Typography className={style.list__value}>0%</Typography>
        </li>
        <li className={style.list__item}>
          <Typography className={style.list__textContent}>
            Самая длинная серия правильных ответов:
          </Typography>
          <Typography className={style.list__value}>0</Typography>
        </li>
      </ul>
    </div>
  )
}

export default ItemList
