import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__logo}>
          <div>
            <span>RS</span>
            <span>LANG</span>
          </div>
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
              <a href='https://github.com/roman847'>
                <img src='images/github.png' width='15px' height='15px' />
                <span> Roman</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/DittmerOk'>
                <img src='images/github.png' width='15px' height='15px' />
                <span> Andrey</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/limhill'>
                <img src='images/github.png' width='15px' height='15px' />
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
