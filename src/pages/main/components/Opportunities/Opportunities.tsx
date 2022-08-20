import React from 'react'
import style from './Opportunities.module.scss'
import clsx from 'clsx'

const Opportunities = () => {
  return (
    <section className={style.wrapper}>
      <h2 className={style.section__header}>Наши возможности</h2>
      <div className={style.cards}>
        <div className={style.card}>
          <div className={clsx(style.firstImg, style.card__img)}></div>
          <h3 className={style.card__header}>Учебник</h3>
          <p className={style.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </p>
        </div>
        <div className={style.card}>
          <div className={clsx(style.secondImg, style.card__img)}></div>
          <h3 className={style.card__header}>Словарь</h3>
          <p className={style.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </p>
        </div>
        <div className={style.card}>
          <div className={clsx(style.thirdImg, style.card__img)}></div>
          <h3 className={style.card__header}>Статистика</h3>
          <p className={style.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id. Fermentum
            molestie enim, morbi felis.
          </p>
        </div>
        <div className={style.card}>
          <div className={clsx(style.fourthImg, style.card__img)}></div>
          <h3 className={style.card__header}>Игры</h3>
          <p className={style.card__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet,
            commodo amet cursus proin. Augue a pulvinar sed vel feugiat viverra sed id.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Opportunities
