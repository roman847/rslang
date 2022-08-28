import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { IWordsItem } from 'core/interfaces/dataModels'
import Header from 'pages/main/components/Header/Header'
import Footer from 'pages/main/components/Footer/Footer'
import ProjectButton from 'components/ProjectButton/ProjectButton'
import { Color, ButtonVariants } from 'core/variables/constants'
import { setPage, setGroup, fetchWords } from 'redux/textBook/textBookSlice'
import { useAppDispatch } from 'app/hooks'
import style from './textBook.module.scss'

interface IStore {
  textBook: IReducer
}
interface IReducer {
  page: {
    number: string
  }
  group: {
    number: string
  }
  words: []
}

const Textbook = () => {
  const page = useSelector((state: IStore) => state.textBook.page.number)
  const group = useSelector((state: IStore) => state.textBook.group.number)
  const words = useSelector((state: IStore) => state.textBook.words)
  const dispatch = useAppDispatch()

  const handler = (difficult: string) => {
    dispatch(setGroup({ number: difficult }))
    console.log(group)
  }

  useEffect(() => {
    dispatch(fetchWords({ page: page, group: group }))
  }, [dispatch])

  return (
    <div>
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
            <button
              style={{ width: '63px', height: '63px', borderRadius: '50%' }}
              onClick={() => handler('1')}
            >
              1
            </button>
            <button style={{ width: '63px', height: '63px', borderRadius: '50%' }}>2</button>
            <button style={{ width: '63px', height: '63px', borderRadius: '50%' }}>3</button>
            <button style={{ width: '63px', height: '63px', borderRadius: '50%' }}>4</button>
            <button style={{ width: '63px', height: '63px', borderRadius: '50%' }}>5</button>
            <button style={{ width: '63px', height: '63px', borderRadius: '50%' }}>6</button>
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
      </Box>
      <Footer />
    </div>
  )
}

export default Textbook
