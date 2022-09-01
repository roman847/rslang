import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat22, Montserrat36 } from 'core/variables/constants'

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
    '&:active': {
      textDecoration: 'underline',
      color: Color.blackText,
    },
  },
  title: {
    ...Montserrat36,
    color: Color.secondary,
    paddingTop: pxToRem(65),
  },
}
export default styles
