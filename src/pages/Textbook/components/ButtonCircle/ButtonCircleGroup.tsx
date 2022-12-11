import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Box } from '@mui/material'
import clsx from 'clsx'
import { identifyActiveButtonCircle } from 'services/index'

import style from './buttonCircle.module.scss'

interface IButtonCircleProps {
  handler: (difficult: string) => void
}

const ButtonCircle = ({ handler }: IButtonCircleProps) => {
  const group = localStorage.getItem('group')

  const [appState, setState] = useState({
    activeButton: group,
    buttons: [
      { id: 1, value: 'A1' },
      { id: 2, value: 'A2' },
      { id: 3, value: 'B1' },
      { id: 4, value: 'B2' },
      { id: 5, value: 'C1' },
      { id: 6, value: 'C2' },
    ],
  })

  const toggleActive = () => {
    setState({ ...appState, activeButton: group })
  }

  return (
    <Stack direction='row' spacing={2}>
      <Box className={style.container__buttonGroup}>
        {appState.buttons.map((btn, index) => {
          return (
            <Button
              className={clsx(style.group__button)}
              key={index}
              onClick={() => {
                toggleActive()
                handler(`${index}`)
              }}
              sx={
                index.toString() === group
                  ? {
                      backgroundColor: identifyActiveButtonCircle(index),
                      border: `1px solid ${identifyActiveButtonCircle(index)}`,
                    }
                  : {
                      ':hover': { background: identifyActiveButtonCircle(index) },
                      border: `1px solid ${identifyActiveButtonCircle(index)}`,
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
