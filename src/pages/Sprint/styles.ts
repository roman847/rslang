import { Color } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

const styles = {
  main: {
    background: Color.pageBackground,
    minHeight: '100vh',
  },
  wrapper: {
    maxWidth: `${pxToRem(1440)}`,
    paddingTop: pxToRem(45),
    paddingLeft: pxToRem(70),
    paddingRight: pxToRem(136),
    margin: '0 auto',
  },
}

export default styles
