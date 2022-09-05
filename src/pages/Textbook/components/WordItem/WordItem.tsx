import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { IWordItemProps } from 'core/interfaces/propsInterfaces'
import { deleteUserWord } from 'services/usersWords'
import { getUserId } from 'services'
import style from './wordItem.module.scss'

const WordItem = ({ word, wordTranslate, bg, hover, active, onClick }: IWordItemProps) => {
  return (
    <Box
      onClick={onClick}
      className={style.container__item}
      sx={
        active
          ? { background: hover, ':hover': { background: hover } }
          : { background: bg, ':hover': { background: hover } }
      }
    >
      <Typography className={style.item__word}>{word}</Typography>
      <Typography className={style.item__translate}>{wordTranslate}</Typography>
    </Box>
  )
}

export default WordItem
