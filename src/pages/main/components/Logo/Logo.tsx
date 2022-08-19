import React from 'react'
import style from './Logo.module.scss'

const Logo: React.FC = () => {
  return (
    <div className={style.logo}>
      <span>RS</span>
      <span>LANG</span>
    </div>
  )
}

export default Logo
