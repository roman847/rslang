import { Color } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

export const styles = {
  select: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    color: Color.blackText,
    fontWeight: 500,
    padding: 0,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(22),
    textTransform: 'none',
  },
}
