import React from 'react'
import style from './card.module.scss'
import { Avatar, Container } from '@mui/material'
import { IPropsCard } from '../../../../core/interfaces/propsInterfaces'

const Card = ({ name, avatar, text, github }: IPropsCard) => {
  return (
    <div className='Card'>
      <Container className={style.card__container}>
        <Avatar alt='roman-avatar' src={avatar} className={style.card__avatar} />
        <h3>{name}</h3>
        <a href={github}>github</a>
        <p>{text}</p>
      </Container>
    </div>
  )
}

export default Card
