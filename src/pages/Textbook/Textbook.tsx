import React, { useEffect, useState } from 'react'
import { Box, Typography, Link } from '@mui/material'
import clsx from 'clsx'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'
import {
  fetchWords,
  setFocusWord,
  IStore,
  setLearnedWords,
  setDifficultWords,
} from 'features/textBook/dictionary'
import {
  saveLocalStorage,
  identifyWordItemBg,
  identifyWordItemHover,
  getGroup,
  getPage,
  getUserId,
  identifyLearnedWord,
  identifyDifficultWord,
} from 'services/index'
import ButtonCircleGroup from 'pages/Textbook/components/ButtonCircle/ButtonCircleGroup'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import WordItem from 'pages/Textbook/components/WordItem/WordItem'
import { IWordsItem } from 'core/interfaces/dataModels'
import Header from 'pages/main/components/Header/Header'
import Footer from 'pages/main/components/Footer/Footer'
import ProjectButton from 'components/ProjectButton/ProjectButton'
import { Color, ButtonVariants } from 'core/variables/constants'
import LinkToGame from 'pages/Textbook/components/LinkToGame/LinkToGame'
import TextBookAside from 'pages/Textbook/components/textBookAside/TextBookAside'
import style from './textBook.module.scss'

const Textbook = () => {
  const words = useAppSelector((state: IStore) => state.textBook.words)
  const allLearnedWord: IWordsItem[] = useAppSelector(
    (state: IStore) => state.textBook.learnedWords,
  )
  const allDifficultWord: IWordsItem[] = useAppSelector(
    (state: IStore) => state.textBook.difficultWords,
  )
  const currentWord = useAppSelector((state: IStore) => state.textBook.focusWord)
  const word = useAppSelector((state: IStore) => state.textBook.focusWord)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [activeItem, setActiveItem] = useState(0)
  const [group, setGroup] = useState(getGroup)
  const [page, setPage] = useState(getPage)
  const [currentWords, setCurrentWords] = useState(words)

  const difficultWordsHandler = () => {
    if (getUserId()) {
      setCurrentWords(allDifficultWord)
      navigate('/difficultwords')
    }
  }

  saveLocalStorage('group', group)
  saveLocalStorage('page', page)

  const handlerButton = (difficult: string) => {
    setActiveItem(0)
    setGroup(difficult)
    setPage('0')
  }

  const handlerLearnedWord = () => {
    if (!identifyDifficultWord(allDifficultWord, (word as IWordsItem).id)) {
      if (!identifyLearnedWord(allLearnedWord, (word as IWordsItem).id)) {
        const arr = [currentWord as IWordsItem, ...allLearnedWord]
        dispatch(setLearnedWords(arr))
      } else if (identifyLearnedWord(allLearnedWord, (word as IWordsItem).id)) {
        const arr = allLearnedWord.filter((item) => item.id !== currentWord?.id)
        dispatch(setLearnedWords(arr))
      }
    }
  }

  const handlerDifficultWord = () => {
    if (!identifyLearnedWord(allLearnedWord, (word as IWordsItem).id)) {
      if (!identifyDifficultWord(allDifficultWord, (word as IWordsItem).id)) {
        const arr = [currentWord as IWordsItem, ...allDifficultWord]
        dispatch(setDifficultWords(arr))
      } else if (identifyDifficultWord(allDifficultWord, (word as IWordsItem).id)) {
        const arr = allDifficultWord.filter((item) => item.id !== currentWord?.id)
        dispatch(setDifficultWords(arr))
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('save-words', JSON.stringify(allLearnedWord))
  }, [allLearnedWord])

  useEffect(() => {
    localStorage.setItem('difficult-words', JSON.stringify(allDifficultWord))
  }, [allDifficultWord])

  useEffect(() => {
    dispatch(setFocusWord(words[0]))
    setCurrentWords(words)
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
          <Link onClick={difficultWordsHandler} className={style.difficultWords__link}>
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
          </Link>
        </Box>
        <Box className={style.textBook__mainContent}>
          <Box className={style.container__words}>
            {words &&
              currentWords.map((item: IWordsItem, index: number) => {
                return (
                  <WordItem
                    word={item.word}
                    wordTranslate={item.wordTranslate}
                    bg={
                      identifyLearnedWord(allLearnedWord, item.id)
                        ? Color.secondary
                        : identifyWordItemBg(group)
                    }
                    border={
                      identifyDifficultWord(allDifficultWord, item.id)
                        ? `4px solid ${Color.error}`
                        : 'none'
                    }
                    hover={identifyWordItemHover(group)}
                    key={index}
                    item={item}
                    active={activeItem === index ? true : false}
                    onClick={() => handlerItem(index)}
                  />
                )
              })}
          </Box>
          <TextBookAside
            handleLearnedWord={handlerLearnedWord}
            handlerDifficultWord={handlerDifficultWord}
          />
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
              setPage(`${num - 1}`)
              setActiveItem(0)
              saveLocalStorage('page', `${num - 1}`)
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
