import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat16, Montserrat36, Mulish36 } from 'core/variables/constants'

const styles = {
  wrapper: {
    minHeight: '100vh',
    padding: `${pxToRem(40)} ${pxToRem(135)} 0`,
    backgroundColor: Color.pageBackground,
    backgroundImage: "url('images/auth_main_img.png'), url('images/secondary_img.png')",
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundPosition: `85% 28%, 80% 35%`,
  },
  header: {
    paddingTop: pxToRem(125),
    maxWidth: pxToRem(430),
  },
  header__text: {
    ...Montserrat36,
  },
  logo: {
    ...Mulish36,
  },
  logo_orange: {
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
  sign: {
    display: 'flex',
    paddingTop: pxToRem(15),
  },
  sign__text: {
    ...Montserrat16,
  },
  sign__link: {
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
