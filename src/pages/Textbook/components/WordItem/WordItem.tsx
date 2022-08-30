import React, { useEffect } from 'react'
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
}

const WordItem = ({ item, bg, hover }: IWordItemProps) => {
  const dispatch = useAppDispatch()
  const words = useSelector((state: IStore) => state.textBook.words)
  if (words) {
    dispatch(setFocusWord(words[0]))
  }

  const handler = () => {
    dispatch(setFocusWord(item))
  }
  useEffect(() => {
    dispatch(setFocusWord(words[0]))
  }, [])
  return (
    <Box
      onClick={() => {
        handler()
      }}
      className={style.container__item}
      sx={{ background: bg, ':hover': { background: hover } }}
    >
      <Typography className={style.item__word}>{item.word}</Typography>
      <Typography className={style.item__translate}>{item.wordTranslate}</Typography>
    </Box>
  )
}

export default WordItem
