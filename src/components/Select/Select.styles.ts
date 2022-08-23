import { Color } from 'core/variables/constansts'

const pxToRem = (px: number) => `${px / 16}rem`

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
