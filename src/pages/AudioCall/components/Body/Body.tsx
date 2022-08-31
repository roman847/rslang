import React, { useState } from 'react'
import { GamePhase, setGamePhase } from 'features/audioCall/audioCallSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import ProjectButton from 'components/ProjectButton'
import { getWords } from 'services/words'
import style from './Body.module.scss'

const Body = () => {
  const { level } = useAppSelector((state) => state.audioCall)
  const dispatch = useAppDispatch()
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLevel((event.target as HTMLInputElement).value))
  }
  const clickHandler = () => {
    dispatch(setGamePhase(GamePhase.inProcess))
  }

  return (
    <div className={style.wrapper}>
      <div>Аудиовызов</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac a augue magna amet, commodo
        amet cursus proin.
      </div>
      <div>Выберите уровень</div>
      <div>
        <div onClick={clickHandler}>A1</div>
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
