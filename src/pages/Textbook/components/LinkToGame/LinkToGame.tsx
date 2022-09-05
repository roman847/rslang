import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { ILinkToGameProp } from 'core/interfaces/propsInterfaces'
import style from './linkGame.module.scss'

const LinkToGame = ({ image, title, description, route }: ILinkToGameProp) => {
  const navigate = useNavigate()
  const linkHandler = () => {
    navigate(route)
  }
  return (
    <Box className={style.container}>
      <Box onClick={linkHandler} className={style.container__card}>
        <Card className={style.card}>
          <CardMedia
            className={style.card__image}
            component='img'
            height='140'
            image={image}
            alt='green iguana'
          />
          <CardContent>
            <Typography className={style.card__title}>{title}</Typography>
            <Typography className={style.card__text}>{description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default LinkToGame
