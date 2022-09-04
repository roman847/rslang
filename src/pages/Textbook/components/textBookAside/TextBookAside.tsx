import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'
import { Color, ButtonVariants } from 'core/variables/constants'
import { setFocusWord } from 'redux/textBook/textBookSlice'
import { IStore } from 'redux/textBook/store'
import ProjectButton from 'components/ProjectButton/ProjectButton'
import { useAppDispatch } from 'app/hooks'
import Icon from 'components/Icon/Icon'
import style from './textBookAside.module.scss'

const TextBookAside = () => {
  const word = useSelector((state: IStore) => state.textBook.focusWord)
  const audioWord = new Audio(`${process.env.REACT_APP_BASE_URL}/${word?.audio}`)
  const audioMeaning = new Audio(`${process.env.REACT_APP_BASE_URL}/${word?.audioMeaning}`)
  const audioExample = new Audio(`${process.env.REACT_APP_BASE_URL}/${word?.audioExample}`)

  const handlerAudio = () => {
    audioWord.play()
    setTimeout(() => {
      audioMeaning.play()
    }, 1500)
    setTimeout(() => {
      audioExample.play()
    }, 7000)
  }
  // useEffect(() => {
  //   const userId = getUserId()

  //   const createWord = async (): Promise<IResponseCreateWord | void> => {
  //     try {
  //       const response = await axiosInstance.post(
  //         `/users/${userId}/words/5e9f5ee35eb9e72bc21af6fe`,
  //         {
  //           difficulty: 'difficult',
  //           optional: {},
  //         },
  //       )
  //       console.log(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   createWord()
  // }, [])
  return (
    <Box className={style.card__container}>
      <Card sx={{ maxWidth: 300 }} className={style.card}>
        <CardActionArea>
          {word && (
            <CardMedia
              component='img'
              height='140'
              image={`https://react-learn-new-words.herokuapp.com/${word.image}`}
              alt='green iguana'
            />
          )}
          <CardContent className={style.container__cardText}>
            <Box className={style.wrapper__word}>
              {word && <Typography className={style.word}>{word.word} -</Typography>}
              {word && (
                <Typography className={style.word__translation}>{word.wordTranslate}</Typography>
              )}
            </Box>
            <Box className={style.container__transcription}>
              {word && (
                <Typography className={style.word__transcription}>{word.transcription}</Typography>
              )}
              <img
                onClick={handlerAudio}
                src='images/volume-2.svg'
                alt='volume'
                className={style.audio__icon}
              />
            </Box>
            <Typography className={style.title__word}>Значение</Typography>
            {word && (
              <Typography className={style.word__description}>
                {word.textMeaningTranslate}
              </Typography>
            )}
            <Typography className={style.title__word}>Пример</Typography>
            {word && (
              <Typography className={style.word__description}>{word.textExample}</Typography>
            )}
            {word && (
              <Typography className={style.word__description}>
                {word.textExampleTranslate}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ProjectButton
            className='button'
            variant={ButtonVariants.secondary}
            width={'100%'}
            height={35}
            borderColor={Color.primary}
            fontSize={18}
          >
            Сложные слова
          </ProjectButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default TextBookAside
