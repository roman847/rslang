import { Box } from '@mui/system'
import React from 'react'
import clsx from 'clsx'
import { AppBar, Toolbar } from '@mui/material'
import { useNavigate, NavLink } from 'react-router-dom'

import { Color, ButtonVariants } from 'core/variables/constants'
import SelectElement from 'components/Select/Select'
import ProjectButton from 'components/ProjectButton'
import './Header.scss'
import Logo from 'components/Logo'

const Header = () => {
  const navigate = useNavigate()
  const loginButtonHandler = () => {
    navigate('/auth')
  }

  return (
    <div className='wrapper'>
      <AppBar className='header'>
        <Toolbar className={clsx('container', 'header__nav')}>
          <Logo />
          <Box className='nav__list'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
              Главная
            </NavLink>
            <NavLink to='/textbook' className={({ isActive }) => (isActive ? 'active' : '')}>
              Учебник
            </NavLink>
            <SelectElement label={'Игры'} fields={['Игра 1', 'Игра 2', 'Игра 3', 'Игра 4']} />
            <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : '')}>
              Статистика
            </NavLink>
            <ProjectButton
              className='button'
              action={loginButtonHandler}
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
