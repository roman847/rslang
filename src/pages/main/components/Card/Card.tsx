import React from 'react'
import style from './card.module.scss'
import { Avatar, Container } from '@mui/material'
import { IPropsCard } from '../../../../core/interfaces/propsInterfaces'

const Card = ({ name, avatar, text, githubLink }: IPropsCard) => {
  return (
    <div className={style.card}>
      <div className={style.card__container}>
        <Avatar alt='roman-avatar' src={avatar} className={style.card__avatar} />
        <Container className={style.card__text}>
          <h3>{name}</h3>
          <a href={githubLink}>github</a>
          <p>{text}</p>
        </Container>
      </div>
    </div>
  )
}

export default Card
