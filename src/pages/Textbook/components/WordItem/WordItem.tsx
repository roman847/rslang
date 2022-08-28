import React from 'react'
import styled, { Typography, Box } from '@mui/material'

import style from './wordItem.module.scss'

interface IWordItemProps {
  word: string
  wordTranslate: string
  bg: string
}

const WordItem = ({ word, wordTranslate, bg }: IWordItemProps) => {
  return (
    <Box className={style.container__item} style={{ background: bg }}>
      <Typography className={style.item__word}>{word}</Typography>
      <Typography className={style.item__translate}>{wordTranslate}</Typography>
    </Box>
  )
}

export default WordItem
