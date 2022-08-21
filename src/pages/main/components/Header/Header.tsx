import { AppBar, Link, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import style from './Header.module.scss'
import SelectElement from '../../../../components/Select'
import clsx from 'clsx'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <div className={style.wrapper}>
      <AppBar className={style.header}>
        <Toolbar className={clsx('container', style.header__nav)}>
          <Logo />
          <Box className={style.nav__list}>
            <Link className={style.list__link}>Главная</Link>
            <Link className={style.list__link}>Учебник</Link>
            <SelectElement fields={['Игра 1', 'Игра 2', 'Игра 3', 'Игра 4']} />
            <Link className={style.list__link}>Статистика</Link>
            <button>Click</button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
