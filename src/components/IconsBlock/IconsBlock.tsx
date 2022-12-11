import React, { useState } from 'react'
import { Box, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Icon from 'components/Icon'
import SoundIcon from 'components/SoundIcon'
import ZoomIcon from 'components/ZoomIcon'
import { useAppDispatch } from 'app/hooks'
import { exitTheGame, prepareToContinue } from 'features/sprint/sprintSlice'
import { IconPath, Pages } from 'core/variables/constants'
import styles from './styles'

const IconsBlock = () => {
  const dispatch = useAppDispatch()
  const closeClickHandler = () => {
    dispatch(prepareToContinue())
    dispatch(exitTheGame())
  }

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
      <Link component={RouterLink} to={Pages.main} onClick={closeClickHandler}>
        <Icon path={IconPath.closeGameIcon} fill='none' stroke='#1D1D1D' strokeWidth='2' />
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
