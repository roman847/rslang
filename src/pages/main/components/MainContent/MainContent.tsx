import React from 'react'
import clsx from 'clsx'
import ProjectButton from 'components/ProjectButton'
import { ButtonVariants, Color } from 'core/variables/constants'

import style from './MainContent.module.scss'

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
          <ProjectButton
            variant={ButtonVariants.primary}
            width={230}
            height={50}
            borderColor={Color.lightText}
            fontSize={16}
          >
            Начать обучение
          </ProjectButton>
        </div>
      </div>
      <div className={style.wrapper__avatar}>
        <img src='images/woman.png' alt='happyWoman' />
      </div>
    </section>
  )
}

export default MainContent
