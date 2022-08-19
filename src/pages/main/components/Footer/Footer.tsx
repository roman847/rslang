import React from 'react'
import style from './Footer.module.scss'
import Logo from '../Logo/Logo'
import { RomanGit, AndreyGit, AlibekGit } from '../../../../core/variables/constansts'
import clsx from 'clsx'

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={(clsx(style.container), 'container')}>
        <div className={style.footer__logo}>
          <Logo />
          <div>2022</div>
        </div>
        <div className={style.footer__menu}>
          <ul>
            <li>
              <span>Меню</span>
            </li>
            <li>
              <a href='#'>Главная</a>
            </li>
            <li>
              <a href='#'>Учебник</a>
            </li>
            <li>
              <a href='#'>Игры</a>
            </li>
            <li>
              <a href='#'>Статистика</a>
            </li>
          </ul>
        </div>
        <div className={style.footer__team}>
          <ul>
            <li>
              <span>Разработчики</span>
            </li>
            <li>
              <a href={RomanGit} target='_blank' rel='noopener noreferrer'>
                <img src='images/github.png' alt='logo_github' />
                <span> Roman</span>
              </a>
            </li>
            <li>
              <a href={AndreyGit} target='_blank' rel='noopener noreferrer'>
                <img src='images/github.png' alt='logo_github' />
                <span> Andrey</span>
              </a>
            </li>
            <li>
              <a href={AlibekGit} target='_blank' rel='noopener noreferrer'>
                <img src='images/github.png' alt='logo_github' />
                <span> Alibek</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href='https://app.rs.school'>
            <img src='images/school.png'></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
