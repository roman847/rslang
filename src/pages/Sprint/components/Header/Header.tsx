import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Logo from 'components/Logo'
import Icon from 'components/Icon/Icon'
import SoundIcon from 'pages/Sprint/components/SoundIcon'
import ZoomIcon from 'pages/Sprint/components/ZoomIcon'
import styles from './styles'

const Header = () => {
  return (
    <Box component='header' sx={styles.header}>
      <MenuIcon fontSize='large' sx={styles.menuIcon} />
      <Link component={RouterLink} to='/' sx={styles.link}>
        <Logo />
      </Link>
      <Box sx={styles.icons}>
        <Link component={RouterLink} to='/'>
          <Icon path='M18 6L6 18M6 6l12 12' fill='none' stroke='#1D1D1D' strokeWidth='2' />
        </Link>
        <SoundIcon isModeOn={true} />
        <ZoomIcon isModeOn={false} />
      </Box>
    </Box>
  )
}

export default Header
