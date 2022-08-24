import React from 'react'
import { Typography } from '@mui/material'
import style from './itemList.module.scss'

const ItemList = () => {
  return (
    <div>
      <ul className={style.item__list}>
        <li>
          <Typography className={style.list__textContent}>
            Изучено слов: <strong className={style.list__value}>0</strong>
          </Typography>
        </li>
        <li>
          <Typography className={style.list__textContent}>
            Правильных ответов: <strong className={style.list__value}>0%</strong>
          </Typography>
        </li>
        <li>
          <Typography className={style.list__textContent}>
            Самая длинная серия правильных ответов: <strong className={style.list__value}>0</strong>
          </Typography>
        </li>
      </ul>
    </div>
  )
}

export default ItemList
