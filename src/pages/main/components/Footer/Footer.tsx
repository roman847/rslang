import React from 'react'
import clsx from 'clsx'
import { RomanGit, AndreyGit, AlibekGit, RsShoolGit } from 'core/variables/constants'
import Logo from 'pages/main/components/Logo'
import style from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={clsx('container', style.containerFooter)}>
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
          <a href={RsShoolGit} target='_blank' rel='noopener noreferrer'>
            <img src='images/school.png'></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
