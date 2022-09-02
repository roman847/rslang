import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat16, Montserrat22 } from 'core/variables/constants'

const styles = {
  wrapper: {
    padding: `${pxToRem(60)} ${pxToRem(70)} ${pxToRem(65)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    padding: `0 ${pxToRem(5)}`,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  link: {
    ...Montserrat22,
    color: Color.gray,
    transition: '1s ease-in-out',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  subtitle: {
    paddingTop: pxToRem(9),
    ...Montserrat16,
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  active: {
    ...Montserrat22,
    color: Color.blackText,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}
export default styles
