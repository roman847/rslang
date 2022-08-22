import { Box } from '@mui/system'
import React from 'react'
import clsx from 'clsx'
import { AppBar, Link, Toolbar } from '@mui/material'
import { Color, ButtonVariants } from 'core/variables/constansts'
import SelectElement from 'components/Select/Select'
import ProjectButton from 'components/ProjectButton'
import Logo from '../Logo/Logo'

import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.wrapper}>
      <AppBar className={style.header}>
        <Toolbar className={clsx('container', style.header__nav)}>
          <Logo />
          <Box className={style.nav__list}>
            <Link className={style.list__link}>Главная</Link>
            <Link className={style.list__link}>Учебник</Link>
            <SelectElement label={'Игры'} fields={['Игра 1', 'Игра 2', 'Игра 3', 'Игра 4']} />
            <Link className={style.list__link}>Статистика</Link>
            <ProjectButton
              variant={ButtonVariants.secondary}
              width={110}
              height={35}
              borderColor={Color.primary}
              fontSize={18}
            >
              Вход
            </ProjectButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
