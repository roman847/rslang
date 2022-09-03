import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import axios, { AxiosError } from 'axios'
import { setPage, setGroup, fetchWords, setFocusWord } from 'redux/textBook/textBookSlice'
import ButtonCircleGroup from 'pages/Textbook/components/ButtonCircle/ButtonCircleGroup'
import WordItem from 'pages/Textbook/components/WordItem/WordItem'
import { IWordsItem } from 'core/interfaces/dataModels'
import { ServerError } from 'core/interfaces/commonInterfaces'
import Header from 'pages/main/components/Header/Header'
import Footer from 'pages/main/components/Footer/Footer'
import { getToken, identifyWordItemBg, identifyWordItemHover, getUserId } from 'services/index'
import ProjectButton from 'components/ProjectButton/ProjectButton'
import { Color, ButtonVariants, UserErrorMessage } from 'core/variables/constants'
import LinkToGame from 'pages/Textbook/components/LinkToGame/LinkToGame'
import { useAppDispatch } from 'app/hooks'
import { getUser } from 'services/users'
import TextBookAside from 'pages/Textbook/components/textBookAside/TextBookAside'
import { signInErrHandler } from 'services/errorHandler'

import { IStore } from 'redux/textBook/store'

import style from './textBook.module.scss'

interface IWordCreate {
  userToken: string
  id: string
}
interface IResponseCreateWord {
  difficulty: 'string'
  optional: {
    difficulty: string
  }
}

const Textbook = () => {
  const page = useSelector((state: IStore) => state.textBook.page.number)
  const group = useSelector((state: IStore) => state.textBook.group.number)
  const words = useSelector((state: IStore) => state.textBook.words)
  const [activeItem, setActiveItem] = useState(0)

  const dispatch = useAppDispatch()

  const handlerButton = (difficult: string) => {
    setActiveItem(0)
    dispatch(setGroup({ number: difficult }))
    dispatch(setPage({ number: '0' }))
  }

  useEffect(() => {
    dispatch(setFocusWord(words[0]))
  }, [words])

  useEffect(() => {
    dispatch(fetchWords({ page: page, group: group }))
  }, [page, group])

  const handlerItem = (index: number) => {
    setActiveItem(index)
    dispatch(setFocusWord(words[index]))
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
            {words &&
              words.map((item: IWordsItem, index: number) => {
                return (
                  <WordItem
                    bg={identifyWordItemBg(group)}
                    hover={identifyWordItemHover(group)}
                    key={index}
                    item={item}
                    active={activeItem === index ? true : false}
                    onClick={() => handlerItem(index)}
                  />
                )
              })}
          </Box>
          <TextBookAside />
        </Box>
        <Stack spacing={2}>
          <Pagination
            size='large'
            count={30}
            variant='outlined'
            page={+page + 1}
            showFirstButton
            showLastButton
            onChange={(_, num) => {
              dispatch(fetchWords({ page: `${num - 1}`, group: group }))
              dispatch(setPage({ number: `${num - 1}` }))
              setActiveItem(0)
            }}
            sx={{ marginX: 'auto', marginBottom: '100px' }}
          />
        </Stack>
        <Box className={style.container__gamesLink}>
          <LinkToGame
            image='images/sprint.png'
            title='Спринт'
            description="Проверь свои знания в интеллектуальной игре 'Спринт'"
            route={'/sprint'}
          />
          <LinkToGame
            image='images/audiocall.png'
            title='Аудиовызов'
            description="Проверь свои знания в интеллектуальной игре 'Аудиовызов'"
            route={'/audio'}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Textbook
