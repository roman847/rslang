import { Color, Montserrat16, Montserrat28, Montserrat46 } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: pxToRem(500),
    margin: '0 auto',
    paddingTop: pxToRem(20),
  },
  title: {
    ...Montserrat46,
    color: Color.secondary,
    fontWeight: 700,
  },
  description: {
    ...Montserrat16,
    textAlign: 'center',
    paddingTop: pxToRem(5),
  },
  subtitle: {
    ...Montserrat28,
    color: Color.secondary,
    fontWeight: 600,
    paddingTop: pxToRem(70),
  },
  options: {
    paddingTop: pxToRem(26),
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    paddingTop: pxToRem(75),
  },
  header: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
  },
}

export default styles
