import React from 'react'
import { IconProps } from 'core/interfaces/propsInterfaces'

const Icon = ({ width = 24, height = 24, fill, path, viewBox, stroke, strokeWidth }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox || `0 0 ${width} ${height}`}
    >
      <path
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        fill={fill}
        d={path}
      ></path>
    </svg>
  )
}

export default Icon
