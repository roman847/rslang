// import { setTimeout } from 'timers'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import ButtonCircleGroup from 'pages/Textbook/components/ButtonCircle/ButtonCircleGroup'
import WordItem from 'pages/Textbook/components/WordItem/WordItem'
import { IWordsItem } from 'core/interfaces/dataModels'
import Header from 'pages/main/components/Header/Header'
import Footer from 'pages/main/components/Footer/Footer'
import ProjectButton from 'components/ProjectButton/ProjectButton'
import { Color, ButtonVariants } from 'core/variables/constants'
import { setGroup, fetchWords, setFocusWord } from 'redux/textBook/textBookSlice'
import { useAppDispatch } from 'app/hooks'
import TextBookAside from 'pages/Textbook/components/textBookAside/TextBookAside'
import { identifyWordItemBg, identifyWordItemHover } from 'services/index'
import { IStore } from 'redux/textBook/store'
import style from './textBook.module.scss'

const Textbook = () => {
  const page = useSelector((state: IStore) => state.textBook.page.number)
  const group = useSelector((state: IStore) => state.textBook.group.number)
  const words = useSelector((state: IStore) => state.textBook.words)
  const dispatch = useAppDispatch()

  const [appState, setState] = useState({
    activeCard: words[0],
    cards: words,
  })
  console.log(words)

  const handlerButton = (difficult: string) => {
    dispatch(setGroup({ number: difficult }))
    setTimeout(() => {
      dispatch(setFocusWord(words[0]))
    }, 0)
  }

  const initialTextBook = async () => {
    await dispatch(fetchWords({ page: page, group: group }))
  }

  useEffect(() => {
    dispatch(setFocusWord(words[0]))
  }, [words])

  useEffect(() => {
    initialTextBook()
  }, [group, page])

  const handler = (item: IWordsItem) => {
    dispatch(setFocusWord(item))
  }

  return (
    <Box className={style.container__page}>
      <Header />
      <Box className={clsx('container', style.container__textBook)}>
        <Typography variant='h2' className={style.textBook__title}>
          Учебник
        </Typography>
        <Box className={style.nav__words}>
          <Typography variant='h5' className={style.nav__title}>
            Уровень сложности
          </Typography>
          <Box className={style.nav__butnBlock}>
            <ButtonCircleGroup handler={handlerButton} />
          </Box>

          <ProjectButton
            className='button'
            variant={ButtonVariants.secondary}
            width={300}
            height={35}
            borderColor={Color.primary}
            fontSize={18}
          >
            Сложные слова
          </ProjectButton>
        </Box>
        <Box className={style.textBook__mainContent}>
          <Box className={style.container__words}>
            {words.map((item: IWordsItem, index: number) => {
              return (
                <WordItem
                  bg={identifyWordItemBg(group)}
                  hover={identifyWordItemHover(group)}
                  key={index}
                  item={item}
                  active={index === 0 ? true : false}
                  onClick={() => handler(item)}
                />
              )
            })}
          </Box>
          <TextBookAside />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Textbook
