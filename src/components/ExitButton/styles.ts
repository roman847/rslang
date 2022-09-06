import { Color, Montserrat18 } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

const styles = {
  select: {
    color: Color.blackText,
    padding: 0,
    textTransform: 'none',
    ...Montserrat18,
    cursor: 'pointer',
  },
  menuItem: {
    '&:hover': {
      fontWeight: 600,
    },
  },
  paper: {
    background: Color.secondaryLight,
    minWidth: pxToRem(134),
  },
}
export default styles
