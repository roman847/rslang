import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AppBar, Toolbar, Link, Box, Typography } from '@mui/material'
import { useNavigate, NavLink, Link as RouterLink } from 'react-router-dom'
import { Color, ButtonVariants, Montserrat16 } from 'core/variables/constants'
import SelectElement from 'components/Select/Select'
import ProjectButton from 'components/ProjectButton'
import './Header.scss'
import Logo from 'components/Logo'
import { useAppSelector } from 'app/hooks'
import UserIcon from 'components/UserIcon'
import pxToRem from 'core/functions/pxToRem'

const Header = () => {
  const navigate = useNavigate()
  const loginButtonHandler = () => {
    navigate('/auth')
  }
  const { currentUserName } = useAppSelector((state) => state.general)
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(<></>)

  useEffect(() => {
    if (!currentUserName) {
      setCurrentComponent(
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
        </ProjectButton>,
      )
    } else {
      setCurrentComponent(
        <Box className='user-logo' sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ marginRight: pxToRem(8), ...Montserrat16, fontWeight: 600 }}>
            {currentUserName}
          </Typography>
          <UserIcon />
        </Box>,
      )
    }
  }, [currentUserName])

  return (
    <div className='wrapper'>
      <AppBar className='header'>
        <Toolbar className={clsx('container', 'header__nav')}>
          <Link component={RouterLink} to='/' sx={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
          <Box className='nav__list'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
              Главная
            </NavLink>
            <NavLink to='/textbook' className={({ isActive }) => (isActive ? 'active' : '')}>
              Учебник
            </NavLink>
            <SelectElement label={'Игры'} />
            <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : '')}>
              Статистика
            </NavLink>
            {currentComponent}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
