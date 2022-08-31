import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { IWordsItem } from 'core/interfaces/dataModels'
import { useAppDispatch } from 'app/hooks'
import { setFocusWord } from 'redux/textBook/textBookSlice'
import { IStore } from 'redux/textBook/store'

import style from './wordItem.module.scss'

interface IWordItemProps {
  bg: string
  hover: string
  item: IWordsItem
  active?: boolean
  onClick: () => void
}

const WordItem = ({ item, bg, hover, active, onClick }: IWordItemProps) => {
  return (
    <Box
      onClick={() => {
        onClick()
      }}
      className={style.container__item}
      sx={
        active
          ? { background: hover, ':hover': { background: hover } }
          : { background: bg, ':hover': { background: hover } }
      }
    >
      <Typography className={style.item__word}>{item.word}</Typography>
      <Typography className={style.item__translate}>{item.wordTranslate}</Typography>
    </Box>
  )
}

export default WordItem
