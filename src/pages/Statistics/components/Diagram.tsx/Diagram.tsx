import React from 'react'

import style from './diagram.module.scss'

const Diagram = () => {
  return (
    <div>
      <body>
        <div id='main' className={style.container__diagram}></div>
      </body>
    </div>
  )
}

export default Diagram
