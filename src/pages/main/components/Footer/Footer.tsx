import React from 'react'
import clsx from 'clsx'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { DevelopersNames, TeamGithub, Images } from 'core/variables/constants'
import Logo from 'components/Logo'
import style from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <Box className={style.footer}>
      <Box className={clsx('container', style.containerFooter)}>
        <Box className={style.footer__logo}>
          <Logo />
          <Typography>2022</Typography>
        </Box>
        <Box className={style.footer__menu}>
          <ul>
            <li>
              <span>Меню</span>
            </li>
            <li>
              <Link to='/'>Главная</Link>
            </li>
            <li>
              <Link to='/textbook'>Учебник</Link>
            </li>
            <li>
              <Link to='#'>Игры</Link>
            </li>
            <li>
              <Link to='/statistics'>Статистика </Link>
            </li>
          </ul>
        </Box>
        <Box className={style.footer__team}>
          <ul>
            <li>
              <span>Разработчики</span>
            </li>
            <li>
              <Link to={TeamGithub.Roman} target='_blank' rel='noopener noreferrer'>
                <img src={Images.git} alt='logo_github' />
                <span> {DevelopersNames.Roman}</span>
              </Link>
            </li>
            <li>
              <Link to={TeamGithub.Andrey} target='_blank' rel='noopener noreferrer'>
                <img src={Images.git} alt='logo_github' />
                <span> {DevelopersNames.Andrey}</span>
              </Link>
            </li>
            <li>
              <Link to={TeamGithub.Alibek} target='_blank' rel='noopener noreferrer'>
                <img src={Images.git} alt='logo_github' />
                <span> {DevelopersNames.Alibek}</span>
              </Link>
            </li>
          </ul>
        </Box>
        <Box>
          <Link to={TeamGithub.RsShool} target='_blank' rel='noopener noreferrer'>
            <img src={Images.school} alt='logo_school' />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
