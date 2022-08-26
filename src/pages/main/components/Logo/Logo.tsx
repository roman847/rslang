import React from 'react'
import { ILogoProps } from 'core/interfaces/propsInterfaces'
import style from './Logo.module.scss'

const Logo = (props: ILogoProps) => {
  const { isBig } = props
  let className
  if (isBig) {
    className = style.logo_big
  } else {
    className = style.logo
  }
  return (
    <div className={className}>
      <span className={style.logo__text_orange}>RS</span>
      <span>LANG</span>
    </div>
  )
}

export default Logo
