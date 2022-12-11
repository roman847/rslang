import React from 'react'
import Icon from 'components/Icon'
import { IconProp } from 'core/interfaces/propsInterfaces'

const SoundIcon = ({ isModeOn }: IconProp) => {
  if (isModeOn) {
    return (
      <Icon
        width={22}
        height={22}
        fill='none'
        path='M10.084 4.583L5.5 8.25H1.833v5.5H5.5l4.584 3.667V4.583zM17.481 4.52a9.167 9.167 0 010 12.96m-3.236-9.725a4.583 4.583 0 010 6.48'
        stroke='#1D1D1D'
        strokeWidth='2'
      />
    )
  } else {
    return (
      <Icon
        width={22}
        height={22}
        fill='none'
        path='M10.084 4.583L5.5 8.25H1.833v5.5H5.5l4.584 3.667V4.583zM21.084 8.25l-5.5 5.5M15.584 8.25l5.5 5.5'
        stroke='#000'
        strokeWidth='2'
      />
    )
  }
}

export default SoundIcon
