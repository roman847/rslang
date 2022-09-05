import React from 'react'
import clsx from 'clsx'
import { Box, Typography, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { DevelopersNames, TeamGithub, Images } from 'core/variables/constants'
import Logo from 'components/Logo'
import style from './Footer.module.scss'

const Footer: React.FC = () => {
  const navigate = useNavigate()
  const linkHandler = (route: string) => {
    navigate(route)
  }
  return (
    <Box className={style.footer}>
      <Box className={clsx('container', style.containerFooter)}>
        <Box className={style.footer__logo}>
          <Logo />
          <Typography>2022</Typography>
        </Box>
        <Box className={style.footer__menu}>
          <Typography className={style.footer__title}>Меню</Typography>
          <ul>
            <li>
              <Link onClick={() => linkHandler('/')}>Главная</Link>
            </li>
            <li>
              <Link onClick={() => linkHandler('/textBook')}>Учебник</Link>
            </li>
            <li>
              <Link onClick={() => linkHandler('')}>Игры</Link>
            </li>
            <li>
              <Link onClick={() => linkHandler('/statistics')}>Статистика </Link>
            </li>
          </ul>
        </Box>
        <Box className={style.footer__team}>
          <Typography className={style.footer__title}>Разработчики</Typography>
          <ul>
            <li>
              <Link href={TeamGithub.Roman} target='_blank' rel='noopener noreferrer'>
                <img src={Images.git} alt='logo_github' />
                <span> {DevelopersNames.Roman}</span>
              </Link>
            </li>
            <li>
              <Link href={TeamGithub.Andrey} target='_blank' rel='noopener noreferrer'>
                <img src={Images.git} alt='logo_github' />
                <span> {DevelopersNames.Andrey}</span>
              </Link>
            </li>
            <li>
              <Link href={TeamGithub.Alibek} target='_blank' rel='noopener noreferrer'>
                <img src={Images.git} alt='logo_github' />
                <span> {DevelopersNames.Alibek}</span>
              </Link>
            </li>
          </ul>
        </Box>
        <Box>
          <Link href='https://rs.school/js/' target='_blank' rel='noopener noreferrer'>
            <img src={Images.school} alt='logo_school' />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
