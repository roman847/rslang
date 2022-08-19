import { AppBar, Link, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'
import style from './header.module.scss'
import SelectElement from '../select/Select'
import clsx from 'clsx'
import Logo from '../Logo/Logo'

export function Header() {
  return (
    <div className={style.wrapper}>
      <AppBar className={style.header}>
        <Toolbar className={clsx('container', style.header__nav)}>
          <Logo />
          <Box className={style.nav__list}>
            <Link className={style.list__link}>Главная</Link>
            <Link className={style.list__link}>Учебник</Link>
            <SelectElement fields={['Игры']} />
            <Link className={style.list__link}>Статистика</Link>
            <button>Click</button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
