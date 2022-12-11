import React from 'react'
import { Avatar, Container, Typography } from '@mui/material'
import { IPropsCard } from 'core/interfaces/propsInterfaces'
import style from './card.module.scss'

const Card = ({ name, teamAvatar, text, githubLink, role }: IPropsCard) => {
  return (
    <div className={style.card}>
      <div className={style.card__container}>
        <Avatar alt='roman-avatar' src={teamAvatar} className={style.card__avatar} />
        <Container className={style.card__text}>
          <Typography variant='h3' className={style.title__card}>
            {name}
          </Typography>
          <Typography className={style.card__role}>{role}</Typography>
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
