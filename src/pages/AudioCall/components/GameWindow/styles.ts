import pxToRem from 'core/functions/pxToRem'
import {
  Color,
  Montserrat32,
  Montserrat36,
  Montserrat52,
  Montserrat46,
} from 'core/variables/constants'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  result: {
    paddingLeft: pxToRem(5),
    ...Montserrat46,
    fontWeight: 700,
    color: Color.secondary,
  },
  container: {
    width: pxToRem(770),
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
  title: {
    paddingTop: pxToRem(65),
    ...Montserrat52,
    color: Color.primary,
  },
  subtitle: {
    ...Montserrat36,
    color: Color.primaryLight,
  },
  button: {
    paddingTop: pxToRem(70),
    textAlign: 'center',
    width: '100%',
  },
  buttons: {
    paddingTop: pxToRem(70),
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    border: Color.blackText,
  },
}
export default styles
