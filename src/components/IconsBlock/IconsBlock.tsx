import React, { useState } from 'react'
import { Box, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Icon from 'components/Icon'
import SoundIcon from 'pages/Sprint/components/SoundIcon'
import ZoomIcon from 'pages/Sprint/components/ZoomIcon'
import styles from './styles'

const IconsBlock = () => {
  const [sound, setSound] = useState(true)
  const clickSoundHandler = () => {
    setSound((prevState) => !prevState)
  }
  const [wideScreen, setWideScreen] = useState(false)
  const clickWideScreenHandler = async () => {
    if (!wideScreen) {
      await document.documentElement.requestFullscreen()
      setWideScreen((prevState) => !prevState)
    } else {
      await document.exitFullscreen()
      setWideScreen((prevState) => !prevState)
    }
  }

  return (
    <Box sx={styles.icons}>
      <Link component={RouterLink} to='/'>
        <Icon path='M18 6L6 18M6 6l12 12' fill='none' stroke='#1D1D1D' strokeWidth='2' />
      </Link>
      <Box sx={styles.icon} onClick={clickSoundHandler}>
        <SoundIcon isModeOn={sound} />
      </Box>
      <Box sx={styles.icon} onClick={clickWideScreenHandler}>
        <ZoomIcon isModeOn={wideScreen} />
      </Box>
    </Box>
  )
}

export default IconsBlock
