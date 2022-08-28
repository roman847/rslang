import React from 'react'
import clsx from 'clsx'
import { ILogoProps } from 'core/interfaces/propsInterfaces'
import { LogoSize } from 'core/variables/constants'
import style from './Logo.module.scss'

const Logo = ({ size }: ILogoProps) => {
  return (
    <div className={clsx(size === LogoSize.big ? style.logo_big : style.logo)}>
      <span>RS</span>
      <span>LANG</span>
    </div>
  )
}

export default Logo
