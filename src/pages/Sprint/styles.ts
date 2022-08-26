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
  },
  header: {
    display: 'flex',
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    height: pxToRem(90),
    width: pxToRem(24),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default styles
