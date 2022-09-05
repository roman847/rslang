import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import clsx from 'clsx'
import Header from 'pages/main/components/Header/Header'
import { getUserId } from 'services/index'
import { IWordItemDifficult } from 'core/interfaces/dataModels'
import { WordItemHover, WordItemBg } from 'core/variables/constants'
import { getUserWords } from 'services/usersWords'
import WordItem from 'pages/Textbook/components/WordItem/WordItem'
import Footer from 'pages/main/components/Footer/Footer'
import style from './difficult.module.scss'

const DifficultWords = () => {
  const userId = getUserId()
  const [words, setWords] = useState([] as IWordItemDifficult[])

  const fnc = (resp: IWordItemDifficult[]) => {
    setWords(resp)
  }
  const getWords = async () => {
    const response = await getUserWords(userId)
    await fnc(response)
  }
  useEffect(() => {
    getWords()
  }, [])

  return (
    <Box className={style.container}>
      <Header />
      {words.length > 0 && (
        <Box className={clsx('container', style.container__main)}>
          <Box className={style.container__words}>
            {words &&
              words.map((item: IWordItemDifficult, index: number) => {
                return (
                  <WordItem
                    word={item.optional.word}
                    wordTranslate={item.optional.wordTranslate}
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
