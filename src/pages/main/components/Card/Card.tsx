import React from 'react'
import style from './card.module.scss'
import { Avatar, Container } from '@mui/material'
import { IPropsCard } from '../../../../core/interfaces/propsInterfaces'
import { Typography } from '@mui/material'

const Card = ({ name, teamAvatar, text, githubLink }: IPropsCard) => {
  return (
    <div className={style.card}>
      <div className={style.card__container}>
        <Avatar alt='roman-avatar' src={teamAvatar} className={style.card__avatar} />
        <Container className={style.card__text}>
          <Typography variant='h3' className={style.title__card}>
            {name}
          </Typography>
          <a className={style.card__link} href={githubLink} target='blank'>
            github
          </a>
          <Typography className={style.card__text}>{text}</Typography>
        </Container>
      </div>
    </div>
  )
}

export default Card
