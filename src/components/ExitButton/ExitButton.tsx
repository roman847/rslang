import React from 'react'
import { Box, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material'
import { IParentProp } from 'core/interfaces/propsInterfaces'
import { removeUserId, removeToken } from 'services'
import { useAppDispatch } from 'app/hooks'
import { setCurrentUser } from 'features/general/generalSlice'
import styles from './styles'

const ExitButton = ({ children }: IParentProp) => {
  const dispatch = useAppDispatch()

  const [opened, setOpened] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    setOpened((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpened(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpened(false)
    } else if (event.key === 'Escape') {
      setOpened(false)
    }
  }

  const clickHandler = (event: Event | React.SyntheticEvent) => {
    removeUserId()
    removeToken()
    dispatch(setCurrentUser(''))
    handleClose(event)
  }

  return (
    <Box>
      <Box
        sx={styles.select}
        ref={anchorRef}
        id='composition-button'
        aria-controls={opened ? 'composition-menu' : undefined}
        aria-expanded={opened ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        {children}
      </Box>
      <Popper
        open={opened}
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
                  autoFocusItem={opened}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={clickHandler} sx={styles.menuItem}>
                    Выйти
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

export default ExitButton
