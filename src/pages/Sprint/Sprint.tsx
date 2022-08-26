import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'
import Logo from 'pages/main/components/Logo'
import Icon from 'components/Icon/Icon'
import styles from './styles'

const Sprint = () => {
  return (
    <Box sx={styles.main}>
      <Box component='main' sx={styles.wrapper}>
        <Box component='header' sx={styles.header}>
          <MenuIcon fontSize='large' />
          <Logo />
          <Box sx={styles.icons}>
            <Icon path='M18 6L6 18M6 6l12 12' fill='none' stroke='#1D1D1D' strokeWidth='2' />
            <Icon
              width={22}
              height={22}
              fill='none'
              path='M10.084 4.583L5.5 8.25H1.833v5.5H5.5l4.584 3.667V4.583zM17.481 4.52a9.167 9.167 0 010 12.96m-3.236-9.725a4.583 4.583 0 010 6.48'
              stroke='#1D1D1D'
              strokeWidth='2'
            />
            <Icon
              fill='none'
              path='M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'
              stroke='#000'
              strokeWidth='2'
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sprint
