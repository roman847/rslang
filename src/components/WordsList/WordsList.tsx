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
import Icon from '../Icon'
import styles from './styles'

const WordsList = () => {
  const testData = ['example', 'words', 'here', 'just', 'for', 'test']
  return (
    <Box sx={styles.wrapper}>
      <List sx={styles.errorsList}>
        <ListSubheader disableSticky sx={styles.listSubheader}>
          <Typography sx={styles.listSubheader__mainText}>Ошибки</Typography>&nbsp;
          <Typography sx={styles.listSubheader__value}>{testData.length}</Typography>
        </ListSubheader>
        {testData.map((item) => (
          <ListItemButton key={item}>
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
              <Typography sx={styles.primaryText}>{`${item} -`}&nbsp;</Typography>
              <Typography sx={styles.secondaryText}>{item}</Typography>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <ListSubheader disableSticky sx={styles.listSubheader}>
        <Typography sx={styles.listSubheader__mainText}>Ошибки</Typography>&nbsp;
        <Typography sx={styles.listSubheader__value}>{testData.length}</Typography>
      </ListSubheader>
      {testData.map((item) => (
        <ListItemButton key={item}>
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
            <Typography sx={styles.primaryText}>{`${item} -`}&nbsp;</Typography>
            <Typography sx={styles.secondaryText}>{item}</Typography>
          </ListItemText>
        </ListItemButton>
      ))}
    </Box>
  )
}

export default WordsList
