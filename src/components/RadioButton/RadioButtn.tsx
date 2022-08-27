import React from 'react'
import { IRadioButton } from 'core/interfaces/propsInterfaces'
import style from './radioButton.module.scss'

const RadioButton = ({ id, name, text }: IRadioButton) => {
  return (
    <div className={style.content__form}>
      <label htmlFor={id} className={style.form__label}>
        <input id={id} name={name} className={style.content__radio} type='radio' checked />
        <span className={style.customRadio}></span>
        {text}
      </label>
    </div>
  )
}

export default RadioButton
