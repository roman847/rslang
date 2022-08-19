import { AppBar, Link, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import classes from './header.module.scss'
import SelectElement from '../select/Select'

export function Header() {
  return (
    <div className={classes.container}>
      <AppBar className={classes.header}>
        <Toolbar className={classes.header__nav}>
          <Box className={classes.logo}>
            <Typography className={classes.logo__title}>RS</Typography>
            <Typography className={classes.logo__title}>LANG</Typography>
          </Box>
          <Box className={classes.nav__list}>
            <Link className={classes.list__link}>Главная</Link>
            <Link className={classes.list__link}>Учебник</Link>
            <SelectElement fields={['Игры']} />
            <Link className={classes.list__link}>Статистика</Link>
            <button>Click</button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
