import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat28, Montserrat36, Montserrat52 } from 'core/variables/constants'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${pxToRem(49)} ${pxToRem(140)} ${pxToRem(64)}`,
  },
  gameInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: pxToRem(41),
  },
  gameInfo__text: {
    ...Montserrat28,
    fontWeight: 600,
  },
  title: {
    paddingTop: pxToRem(65),
    ...Montserrat52,
    color: Color.primary,
  },
  subtitle: {
    ...Montserrat36,
    color: Color.primaryLight,
  },
  buttons: {
    paddingTop: pxToRem(70),
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
}
export default styles
