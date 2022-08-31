import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Box } from '@mui/material'
import clsx from 'clsx'
import { identtifyActiveButtonCircle } from 'services/index'

import style from './buttonCircle.module.scss'

interface IButtonCircleProps {
  handler: (difficult: string) => void
}

const ButtonCircle = ({ handler }: IButtonCircleProps) => {
  const [appState, setState] = useState({
    activeButton: { id: 1 },
    buttons: [
      { id: 1, value: 'A1' },
      { id: 2, value: 'A2' },
      { id: 3, value: 'B1' },
      { id: 4, value: 'B2' },
      { id: 5, value: 'C1' },
      { id: 6, value: 'C2' },
    ],
  })
  useEffect(() => {
    setState({ ...appState, activeButton: appState.buttons[0] })
  }, [])

  const toggleActive = (index: number) => {
    setState({ ...appState, activeButton: appState.buttons[index] })
  }

  const toggleActiveStyle = (index: number): string => {
    if (appState.buttons[index] === appState.activeButton) {
      return `${style.active}`
    } else {
      return 'nonactive'
    }
  }

  return (
    <Stack direction='row' spacing={2}>
      <Box className={style.container__buttonGroup}>
        {appState.buttons.map((btn, index) => {
          return (
            <Button
              className={clsx(style.group__button, toggleActiveStyle(index))}
              key={index}
              onClick={() => {
                toggleActive(index)
                handler(`${index}`)
              }}
              sx={
                appState.buttons[index] === appState.activeButton
                  ? {
                      backgroundColor: identtifyActiveButtonCircle(index),
                      border: `1px solid ${identtifyActiveButtonCircle(index)}`,
                    }
                  : {
                      ':hover': { background: identtifyActiveButtonCircle(index) },
                      border: `1px solid ${identtifyActiveButtonCircle(index)}`,
                    }
              }
            >
              {btn.value}
            </Button>
          )
        })}
      </Box>
    </Stack>
  )
}

export default ButtonCircle
