import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Logo from 'components/Logo'
import IconsBlock from 'components/IconsBlock'
import styles from './styles'

const Header = () => {
  return (
    <Box component='header' sx={styles.header}>
      <MenuIcon fontSize='large' sx={styles.menuIcon} />
      <Link component={RouterLink} to='/' sx={styles.link}>
        <Logo />
      </Link>
      <IconsBlock />
    </Box>
  )
}

export default Header
