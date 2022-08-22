import { AppBar, Link, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import style from './Header.module.scss'
import SelectElement from '../../../../components/Select'
import clsx from 'clsx'
import Logo from '../Logo/Logo'
import ProjectButton from '../../../../components/ProjectButton'
import { Color } from '../../../../core/variables/constansts'
import { ButtonVariants } from '../../../../core/variables/constansts'

const Header = () => {
  return (
    <div className={style.wrapper}>
      <AppBar className={style.header}>
        <Toolbar className={clsx('container', style.header__nav)}>
          <Logo />
          <Box className={style.nav__list}>
            <Link className={style.list__link}>Главная</Link>
            <Link className={style.list__link}>Учебник</Link>
            <SelectElement listName={'Игры'} fields={['Игра 1', 'Игра 2', 'Игра 3', 'Игра 4']} />
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
