import React from 'react'
import style from './input.module.scss'
import { IPropsInput } from '../../core/interfaces/propsInterfaces'

const Input = ({ placeholder, type }: IPropsInput) => {
  return (
    <div>
      <input type={type} className={style.input} placeholder={placeholder} />
    </div>
  )
}

export default Input
