import pxToRem from 'core/functions/pxToRem'
import { Montserrat32 } from 'core/variables/constants'

const styles = {
  timeInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeInfo__text: {
    paddingLeft: pxToRem(14),
    ...Montserrat32,
  },
}

export default styles
