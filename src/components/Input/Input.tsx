import React from 'react'
import style from './input.module.scss'
import { IPropsInput } from '../../core/interfaces/propsInterfaces'

const Input = ({ placeholder, type, id }: IPropsInput) => {
  return (
    <div>
      <label htmlFor={id}>
        <input id={id} type={type} className={style.input} placeholder={placeholder} />
      </label>
    </div>
  )
}

export default Input
