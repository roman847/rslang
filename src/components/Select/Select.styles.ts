import { Color, Fonts } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

export const styles = {
  select: {
    fontFamily: Fonts.Montserrat,
    color: Color.blackText,
    fontWeight: 500,
    padding: 0,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(22),
    textTransform: 'none',
  },
}
