import React from 'react'
import * as echarts from 'echarts'
import style from './diagram.module.scss'

const Diagram = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  }
  return (
    <div>
      <body>
        <div id='main' className={style.container__diagram}></div>
      </body>
    </div>
  )
}

export default Diagram
