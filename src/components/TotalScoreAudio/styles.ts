import { Color, Montserrat16, Montserrat36 } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    ...Montserrat36,
    color: Color.secondary,
    paddingTop: pxToRem(65),
    paddingBottom: pxToRem(20),
  },
  progressBar: {
    height: pxToRem(35),
    width: pxToRem(342),
    color: Color.primary,
  },
  progressBar__scale: {
    height: pxToRem(40),
    borderRadius: pxToRem(100),
    border: `1px solid ${Color.primary}`,
    background: 'none',
    '&::before': {
      background: 'none',
    },
  },
  subtitle: {
    paddingTop: pxToRem(9),
    paddingBottom: pxToRem(108),
    ...Montserrat16,
  },
}
export default styles
