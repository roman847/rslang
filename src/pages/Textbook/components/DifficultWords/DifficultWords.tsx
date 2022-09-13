import React from 'react'
import { Box } from '@mui/material'
import clsx from 'clsx'
import { IWordsItem } from 'core/interfaces/dataModels'
import Header from 'pages/main/components/Header/Header'
import { WordItemHover, WordItemBg } from 'core/variables/constants'
import WordItem from 'pages/Textbook/components/WordItem/WordItem'
import Footer from 'pages/main/components/Footer/Footer'
import { useAppSelector } from 'app/hooks'
import { IStore } from 'features/textBook/dictionary'

import style from './difficult.module.scss'

const DifficultWords = () => {
  const allDifficultWord: IWordsItem[] = useAppSelector(
    (state: IStore) => state.textBook.difficultWords,
  )

  return (
    <Box className={style.container}>
      <Header />
      {allDifficultWord.length > 0 && (
        <Box className={clsx('container', style.container__main)}>
          <Box className={style.container__words}>
            {allDifficultWord &&
              allDifficultWord.map((item: IWordsItem, index: number) => {
                return (
                  <WordItem
                    word={item.word}
                    wordTranslate={item.wordTranslate}
                    bg={WordItemBg.A1}
                    hover={WordItemHover.A1}
                    key={index}
                  />
                )
              })}
          </Box>
        </Box>
      )}
      <Footer />
    </Box>
  )
}

export default DifficultWords
