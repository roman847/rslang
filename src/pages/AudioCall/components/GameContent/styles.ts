import pxToRem from 'core/functions/pxToRem'
import { Montserrat46 } from 'core/variables/constants'

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
    height: pxToRem(630),
    padding: `${pxToRem(49)} ${pxToRem(140)} ${pxToRem(64)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    borderRadius: '50%',
    height: '186px',
    width: '186px',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  word: {
    paddingLeft: pxToRem(25),
    textTransform: 'uppercase',
    ...Montserrat46,
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
