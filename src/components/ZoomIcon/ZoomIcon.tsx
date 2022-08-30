import React from 'react'
import { IconProp } from 'core/interfaces/propsInterfaces'
import Icon from 'components/Icon'

const ZoomIcon = ({ isModeOn }: IconProp) => {
  if (isModeOn) {
    return (
      <Icon
        fill='none'
        path='M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3'
        stroke='#000'
        strokeWidth='2'
      />
    )
  } else {
    return (
      <Icon
        fill='none'
        path='M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'
        stroke='#000'
        strokeWidth='2'
      />
    )
  }
}

export default ZoomIcon
