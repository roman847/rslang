import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'
import { CropLandscapeOutlined } from '@mui/icons-material'
import { IStore } from 'redux/textBook/store'

const TextBookAside = () => {
  const image = useSelector((state: IStore) => state.textBook.focusWord)

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {image && (
            <CardMedia
              component='img'
              height='140'
              image={`https://react-learn-new-words.herokuapp.com/${image.image}`}
              alt='green iguana'
            />
          )}
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default TextBookAside
