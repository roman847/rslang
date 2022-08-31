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

import { IStore } from 'redux/textBook/store'
import ProjectButton from 'components/ProjectButton/ProjectButton'
import { useAppDispatch } from 'app/hooks'
import style from './textBookAside.module.scss'

const TextBookAside = () => {
  const dispatch = useAppDispatch()
  const word = useSelector((state: IStore) => state.textBook.focusWord)

  return (
    <Box>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          {word && (
            <CardMedia
              component='img'
              height='140'
              image={`https://react-learn-new-words.herokuapp.com/${word.image}`}
              alt='green iguana'
            />
          )}
          <CardContent>
            <Box className={style.wrapper__word}>
              {word && (
                <Typography gutterBottom variant='h5' component='div'>
                  {word.word} -
                </Typography>
              )}
              {word && (
                <Typography gutterBottom variant='h5' component='div'>
                  {word.wordTranslate}
                </Typography>
              )}
            </Box>

            {word && <Typography>{word.transcription}</Typography>}
            <Typography>Значение</Typography>
            {word && <Typography>{word.textMeaningTranslate}</Typography>}
            <Typography>Пример</Typography>
            {word && <Typography>{word.textExample}</Typography>}
            {word && <Typography>{word.textExampleTranslate}</Typography>}
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
