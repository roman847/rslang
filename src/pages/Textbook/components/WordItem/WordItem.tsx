import React from 'react'
import { Typography, Box } from '@mui/material'
import { IWordItemProps } from 'core/interfaces/propsInterfaces'
import style from './wordItem.module.scss'

const WordItem = ({ word, wordTranslate, bg, hover, active, onClick, border }: IWordItemProps) => {
  return (
    <Box
      onClick={onClick}
      className={style.container__item}
      sx={
        active
          ? { background: hover, border: border, ':hover': { background: hover } }
          : { background: bg, border: border, ':hover': { background: hover } }
      }
    >
      <Typography className={style.item__word}>{word}</Typography>
      <Typography className={style.item__translate}>{wordTranslate}</Typography>
    </Box>
  )
}

export default WordItem
