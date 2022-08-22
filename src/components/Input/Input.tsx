import React from 'react'
import style from './input.module.scss'
import { IPropsInput } from '../../core/interfaces/propsInterfaces'
import { Box } from '@mui/system'

const Input = ({ placeholder, type, id }: IPropsInput) => {
  return (
    <div>
      <Box sx={{ width: 470 }}>
        <label htmlFor={id}>
          <input id={id} type={type} className={style.input} placeholder={placeholder} />
        </label>
      </Box>
    </div>
  )
}

export default Input
