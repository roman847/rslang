import React from 'react'
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material'
import mockData from 'app/mockData'
import { IGameResults } from 'core/interfaces/propsInterfaces'
import { useAppSelector } from 'app/hooks'
import { GameType } from 'core/variables/constants'
import Icon from 'components/Icon'
import styles from './styles'

const WordsList = ({ gameType }: IGameResults) => {
  let incorrectWords
  let correctWords
  if (gameType === GameType.Sprint) {
    incorrectWords = useAppSelector((state) => state.sprint.wrongAnswers)
    correctWords = useAppSelector((state) => state.sprint.rightAnswers)
  } else {
    incorrectWords = mockData
    correctWords = mockData
  }

  return (
    <Box sx={styles.wrapper}>
      <List sx={styles.list}>
        <ListSubheader disableGutters disableSticky sx={styles.listSubheader_errors}>
          <Typography sx={styles.listSubheader__mainText}>Ошибки</Typography>&nbsp;
          <Typography sx={styles.listSubheader__value_error}>{incorrectWords.length}</Typography>
        </ListSubheader>
        {incorrectWords.map((item) => {
          const { id, word, wordTranslate } = item
          return (
            <ListItemButton key={id}>
              <ListItemIcon sx={styles.listItemIcon}>
                <Icon
                  width={18}
                  height={18}
                  fill='none'
                  strokeWidth='1'
                  stroke='#1D1D1D'
                  path='M8.25 3.75l-3.75 3h-3v4.5h3l3.75 3V3.75zM14.303 3.698a7.5 7.5 0 010 10.605m-2.648-7.958a3.75 3.75 0 010 5.303'
                />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={styles.listItemText}>
                <Typography sx={styles.primaryText}>{`${word} -`}&nbsp;</Typography>
                <Typography sx={styles.secondaryText}>{wordTranslate}</Typography>
              </ListItemText>
            </ListItemButton>
          )
        })}

        <Divider />
        <ListSubheader disableSticky sx={styles.listSubheader_correct}>
          <Typography sx={styles.listSubheader__mainText}>Знаю</Typography>&nbsp;
          <Typography sx={styles.listSubheader__value_correct}>{correctWords.length}</Typography>
        </ListSubheader>
        {correctWords.map((item) => {
          const { id, word, wordTranslate } = item
          return (
            <ListItemButton key={id}>
              <ListItemIcon sx={styles.listItemIcon}>
                <Icon
                  width={18}
                  height={18}
                  fill='none'
                  strokeWidth='1'
                  stroke='#1D1D1D'
                  path='M8.25 3.75l-3.75 3h-3v4.5h3l3.75 3V3.75zM14.303 3.698a7.5 7.5 0 010 10.605m-2.648-7.958a3.75 3.75 0 010 5.303'
                />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={styles.listItemText}>
                <Typography sx={styles.primaryText}>{`${word} -`}&nbsp;</Typography>
                <Typography sx={styles.secondaryText}>{wordTranslate}</Typography>
              </ListItemText>
            </ListItemButton>
          )
        })}
      </List>
    </Box>
  )
}

export default WordsList
