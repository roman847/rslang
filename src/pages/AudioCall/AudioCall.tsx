import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from 'components/Logo'
import style from './AudioCall.module.scss'

const AudioCall = () => {
  return (
    <Box className={style.wrapper}>
      <AppBar className={style.wrapper__header} position='static' color='default'>
        <Toolbar>
          <IconButton size='large' edge='start' color='default' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Logo />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default AudioCall
