import React from 'react'
import { Box } from '@mui/system'
import { IPropsInput } from 'core/interfaces/propsInterfaces'
import style from './input.module.scss'

const Input = ({ placeholder, type, id, action, name }: IPropsInput) => {
  return (
    <div>
      <Box sx={{ width: 470 }}>
        <label htmlFor={id}>
          <input
            id={id}
            type={type}
            className={style.input}
            placeholder={placeholder}
            onChange={action}
            name={name}
          />
        </label>
      </Box>
    </div>
  )
}

export default Input
