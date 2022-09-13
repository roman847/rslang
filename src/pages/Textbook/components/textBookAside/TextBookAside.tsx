import React from 'react'
import { useSelector } from 'react-redux'

import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material'
import { IWordsItem } from 'core/interfaces/dataModels'
import { identifyLearnedWord, identifyDifficultWord } from 'services/index'
import { Color, ButtonVariants } from 'core/variables/constants'
import { IStore } from 'features/textBook/dictionary'
import ProjectButton from 'components/ProjectButton/ProjectButton'
import { useAppSelector } from 'app/hooks'
import style from './textBookAside.module.scss'

const TextBookAside = ({
  handleLearnedWord,
  handlerDifficultWord,
}: {
  handleLearnedWord: () => void
  handlerDifficultWord: () => void
}) => {
  const word = useSelector((state: IStore) => state.textBook.focusWord)
  const allLearnedWord = useAppSelector((state: IStore) => state.textBook.learnedWords)
  const allDifficultWord: IWordsItem[] = useAppSelector(
    (state: IStore) => state.textBook.difficultWords,
  )

  const audioWord = word
    ? new Audio(`${process.env.REACT_APP_BASE_URL}/${word?.audio}`)
    : new Audio()
  const audioMeaning = word
    ? new Audio(`${process.env.REACT_APP_BASE_URL}/${word?.audioMeaning}`)
    : new Audio()
  const audioExample = word
    ? new Audio(`${process.env.REACT_APP_BASE_URL}/${word?.audioExample}`)
    : new Audio()

  const handlerAudio = () => {
    audioWord.play()
    setTimeout(() => {
      audioMeaning.play()
    }, 1500)
    setTimeout(() => {
      audioExample.play()
    }, 7000)
  }

  const identifyCardStyle = () => {
    if (identifyLearnedWord(allLearnedWord, (word as IWordsItem).id)) {
      return `${style.card__learned}`
    } else if (identifyDifficultWord(allDifficultWord, (word as IWordsItem).id)) {
      return `${style.card__difficult}`
    } else {
      return `${style.card}`
    }
  }

  return (
    <Box className={style.card__container}>
      {word && (
        <Card sx={{ maxWidth: 300 }} className={`${identifyCardStyle()}`}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={`https://react-learn-new-words.herokuapp.com/${word.image}`}
              alt='green iguana'
            />

            <CardContent className={style.container__cardText}>
              <Box className={style.wrapper__word}>
                {word && <Typography className={style.word}>{word.word} -</Typography>}
                {word && (
                  <Typography className={style.word__translation}>{word.wordTranslate}</Typography>
                )}
              </Box>
              <Box className={style.container__transcription}>
                {word && (
                  <Typography className={style.word__transcription}>
                    {word.transcription}
                  </Typography>
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
                <Typography className={style.text__description}>
                  {word.textMeaningTranslate}
                </Typography>
              )}

              <Typography className={style.title__word}>Пример</Typography>
              {word && (
                <Box className={style.container__description}>
                  <Typography className={style.text__description}>
                    {word.textExample.substring(0, word.textExample.indexOf('<'))}
                  </Typography>
                  <Typography className={style.description__word}>{word.word}</Typography>
                  <Typography className={style.text__description}>
                    {word.textExample.substring(word.textExample.indexOf('</b>') + 4)}
                  </Typography>
                </Box>
              )}
              {word && (
                <Typography className={style.text__description}>
                  {word.textExampleTranslate}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
          <CardActions className={style.container__cardActions}>
            <ProjectButton
              className='button'
              variant={ButtonVariants.secondary}
              width={'100%'}
              height={35}
              borderColor={Color.primary}
              fontSize={18}
              action={handlerDifficultWord}
            >
              Сложное слово
            </ProjectButton>
            <ProjectButton
              className='button'
              variant={ButtonVariants.secondary}
              width={'100%'}
              height={35}
              borderColor={Color.secondary}
              fontSize={18}
              action={handleLearnedWord}
            >
              Выученное слово
            </ProjectButton>
          </CardActions>
        </Card>
      )}
    </Box>
  )
}

export default TextBookAside
