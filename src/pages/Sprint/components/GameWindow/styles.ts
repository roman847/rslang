import pxToRem from 'core/functions/pxToRem'
import {
  Color,
  Montserrat28,
  Montserrat32,
  Montserrat36,
  Montserrat52,
} from 'core/variables/constants'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: pxToRem(770),
    height: pxToRem(530),
    border: `2px solid ${Color.primary}`,
    borderRadius: pxToRem(100),
    padding: `${pxToRem(49)} ${pxToRem(140)} ${pxToRem(64)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timeInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeInfo__text: {
    paddingLeft: pxToRem(14),
    ...Montserrat32,
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
