import pxToRem from 'core/functions/pxToRem'
import { Montserrat32 } from 'core/variables/constants'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    cursor: 'pointer',
  },
  container: {
    width: pxToRem(1152),
    height: pxToRem(530),
    padding: `${pxToRem(49)} ${pxToRem(140)} ${pxToRem(64)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeInfo__text: {
    paddingLeft: pxToRem(14),
    ...Montserrat32,
  },
  button: {
    paddingTop: pxToRem(70),
    textAlign: 'center',
    width: '100%',
  },
  buttons: {
    paddingTop: pxToRem(70),
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    columnGap: pxToRem(13),
  },
}
export default styles
