import React from 'react'
import style from './MainContent.module.scss'
import clsx from 'clsx'

const MainContent = () => {
  return (
    <section className={clsx('container', style.wrapper)}>
      <div className={style.wrapper__content}>
        <div className={style.wrapper__title}>
          Изучай <span>английский </span>
          вместе с нами
        </div>
        <div className={style.wrapper__text}>
          Эффективное изучение английских слов в игровой форме. Теперь аглийский учить легко и
          увлекательно. Для детей и взрослых.
        </div>
        <div>
          <button>Красивая кнопка</button>
        </div>
      </div>
      <div className={style.wrapper__avatar}>
        <img src='images/woman.png' alt='happyWoman' />
      </div>
    </section>
  )
}

export default MainContent
