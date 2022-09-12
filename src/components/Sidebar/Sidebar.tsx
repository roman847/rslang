import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Drawer, List, Link, ListItem, ListSubheader } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from 'components/Logo'
import { IconPath, Pages } from 'core/variables/constants'
import Icon from 'components/Icon'
import styles from './styles'

const Sidebar = () => {
  const [opened, setOpened] = React.useState(false)

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setOpened((prevState) => !prevState)
  }

  return (
    <Box>
      <Box sx={{ display: opened ? 'none' : 'flex' }}>
        <MenuIcon sx={styles.menuIcon} fontSize='large' onClick={toggleDrawer} />
        <Link component={RouterLink} to={Pages.main} sx={styles.link}>
          <Logo />
        </Link>
      </Box>
      <Drawer anchor='left' open={opened} onClose={toggleDrawer}>
        <List sx={styles.list}>
          <ListSubheader sx={styles.subheader}>
            <Link component={RouterLink} to={Pages.main} sx={styles.link}>
              <Logo />
            </Link>
            <Box sx={styles.subheader__icon} onClick={toggleDrawer}>
              <Icon path={IconPath.closeGameIcon} fill='none' stroke='#1D1D1D' strokeWidth='2' />
            </Box>
          </ListSubheader>
          <Box sx={styles.list__items}>
            <ListItem disablePadding>
              <Link component={RouterLink} to={Pages.main} sx={styles.item}>
                Главная
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link component={RouterLink} to={Pages.textbook} sx={styles.item}>
                Учебник
              </Link>
            </ListItem>
            <List disablePadding>
              <ListSubheader sx={styles.innerList__subheader}>Игры</ListSubheader>
              <Box sx={styles.innerList__items}>
                <ListItem disablePadding>
                  <Link component={RouterLink} to={Pages.sprint} sx={styles.innerList__item}>
                    Спринт
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link component={RouterLink} to={Pages.audio} sx={styles.innerList__item}>
                    Аудиовызов
                  </Link>
                </ListItem>
              </Box>
            </List>
            <ListItem disablePadding>
              <Link component={RouterLink} to={Pages.statistics} sx={styles.item}>
                Статистика
              </Link>
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </Box>
  )
}

export default Sidebar
