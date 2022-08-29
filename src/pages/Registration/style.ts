import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat16, Montserrat36, Mulish36 } from 'core/variables/constants'

const styles = {
  page: {
    minHeight: '100vh',
    margin: '0 auto',
    backgroundColor: Color.pageBackground,
  },
  wrapper: {
    maxWidth: `${pxToRem(1440)}`,
    margin: '0 auto',
    minHeight: '100vh',
    padding: `${pxToRem(40)} ${pxToRem(135)} 0`,
    backgroundImage: "url('images/auth_main_img.png'), url('images/secondary_img.png')",
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundPosition: `${pxToRem(876.5)} ${pxToRem(135)}, ${pxToRem(835)} ${pxToRem(158.5)}`,
  },
  logoLink: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  logo: {
    ...Mulish36,
  },
  header: {
    paddingTop: pxToRem(125),
    maxWidth: pxToRem(430),
  },
  header__text: {
    ...Montserrat36,
  },
  header__text_extra: {
    ...Mulish36,
  },
  header__text_extraOrange: {
    ...Mulish36,
    color: Color.primary,
  },
  logo__container: {
    display: 'flex',
  },
  inputsContainer: {
    paddingTop: pxToRem(60),
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(30),
  },
  button: {
    paddingTop: pxToRem(18),
  },
  reg: {
    display: 'flex',
    paddingTop: pxToRem(15),
  },
  reg__text: {
    ...Montserrat16,
  },
  reg__link: {
    ...Montserrat16,
    fontWeight: 500,
    cursor: 'pointer',
  },
  errorMessage: {
    ...Montserrat16,
    color: Color.error,
    paddingTop: pxToRem(7),
    minHeight: pxToRem(32),
    boxSizing: 'border-box',
  },
  content: {
    maxWidth: pxToRem(470),
  },
}

export default styles
