import { Color, Montserrat18 } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

export const styles = {
  select: {
    color: Color.blackText,
    padding: 0,
    textTransform: 'none',
    ...Montserrat18,
  },
  link: {
    textDecoration: 'none',
    color: Color.blackText,
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
