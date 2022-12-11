import React, { useCallback, useState } from 'react'
import { Box, Typography } from '@mui/material'
import useControllableAnimation from 'react-use-controllable-animation'
import IconsBlock from 'components/IconsBlock'
import styles from './styles'

const LoadingScreen = () => {
  const [loadingAnimation, setLoadingAnimation]: [
    HTMLElement | undefined,
    React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  ] = useState()
  const onProgress = useCallback(
    (progress: number) => {
      if (!loadingAnimation) return
      loadingAnimation.style.left = `${(progress * 100).toFixed(2)}%`
    },
    [loadingAnimation],
  )
  const { start } = useControllableAnimation({
    alternate: true,
    duration: 1500,
    onProgress,
  })
  start()
  return (
    <Box>
      <Box component='header' sx={styles.header}>
        <Typography sx={styles.title}>Аудиовызов</Typography>
        <IconsBlock />
      </Box>
      <Box sx={styles.container}>
        <Box sx={styles.loadingTrack}>
          <Box sx={styles.loadingIndicator} ref={setLoadingAnimation}></Box>
        </Box>
      </Box>
      <Typography sx={styles.subtitle}>Приготовьтесь</Typography>
    </Box>
  )
}

export default LoadingScreen
