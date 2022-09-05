import React from 'react'
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { IPropsSelectElement } from 'core/interfaces/propsInterfaces'
import { Pages } from 'core/variables/constants'
import { styles } from './Select.styles'

const SelectElement = ({ label }: IPropsSelectElement) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }
  return (
    <Box>
      <Button
        sx={styles.select}
        ref={anchorRef}
        id='composition-button'
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        <Box>{label}</Box>
        <KeyboardArrowDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-start'
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper sx={styles.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose} sx={styles.menuItem}>
                    <Link component={RouterLink} to={Pages.sprint} sx={styles.link}>
                      Спринт
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} sx={styles.menuItem}>
                    <Link component={RouterLink} to={Pages.audio} sx={styles.link}>
                      Аудиовызов
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}
export default SelectElement
