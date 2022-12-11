import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AppBar, Toolbar, Link, Box, Typography } from '@mui/material'
import { useNavigate, NavLink, Link as RouterLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { Color, ButtonVariants, Montserrat16, Pages } from 'core/variables/constants'
import SelectElement from 'components/Select/Select'
import ProjectButton from 'components/ProjectButton'
import './Header.scss'
import Logo from 'components/Logo'
import UserIcon from 'components/UserIcon'
import pxToRem from 'core/functions/pxToRem'
import { getUserId } from 'services'
import { getUser } from 'services/users'
import isServerError from 'core/functions/isServerError'
import Sidebar from 'components/Sidebar/Sidebar'
import ExitButton from 'components/ExitButton'

import { setCurrentUser } from 'features/general/generalSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loginButtonHandler = () => {
    navigate(Pages.auth)
  }
  const [currentComponent, setCurrentComponent] = useState<React.ReactNode>(<></>)
  const { currentUser } = useAppSelector((state) => state.general)
  const screenWidth = window.screen.width

  useEffect(() => {
    const userId = getUserId()
    const getUserName = async () => {
      const userData = await getUser(userId)
      if (!isServerError(userData)) {
        dispatch(setCurrentUser(userData.name))
      }
    }
    if (!userId) {
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
      getUserName().then()
      setCurrentComponent(
        <ExitButton>
          <Box className='user-logo' sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ marginRight: pxToRem(8), ...Montserrat16, fontWeight: 600 }}>
              {currentUser}
            </Typography>
            <UserIcon />
          </Box>
        </ExitButton>,
      )
    }
  }, [currentUser])

  return (
    <div className='wrapper'>
      <AppBar className='header'>
        <Toolbar className={clsx('container', 'header__nav')}>
          {screenWidth <= 768 && <Sidebar />}
          {screenWidth > 768 && (
            <Link component={RouterLink} to='/' sx={{ textDecoration: 'none' }}>
              <Logo />
            </Link>
          )}
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
