import React from 'react'
import ProjectButton from 'components/ProjectButton'
import style from './Body.module.scss'

const Body = () => {
  return (
    <div className={style.wrapper}>
      <div>Аудиовызов</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet, commodo
        amet cursus proin.
      </div>
      <div>Выберите уровень</div>
      <div>
        <div>A1</div>
        <div>A2</div>
        <div>B1</div>
        <div>B2</div>
        <div>C1</div>
        <div>C2</div>
      </div>
      <div>
        <ProjectButton type='submit' width='100%'>
          Начать
        </ProjectButton>
      </div>
    </div>
  )
}

export default Body
