import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat22, Montserrat28 } from 'core/variables/constants'

const styles = {
  link: {
    textDecoration: 'none',
  },
  menuIcon: {
    marginRight: pxToRem(27),
    cursor: 'pointer',
    color: 'black',
  },
  list: {
    width: pxToRem(335),
    paddingLeft: pxToRem(70),
    paddingTop: pxToRem(45),
    paddingRight: pxToRem(37.5),
    background: Color.activePrimaryButton,
    height: '100%',
  },
  subheader: {
    display: 'flex',
    justifyContent: 'space-between',
    background: Color.activePrimaryButton,
  },
  subheader__icon: {
    cursor: 'pointer',
  },
  list__items: {
    paddingTop: pxToRem(65),
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(30),
  },
  item: {
    ...Montserrat28,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    color: Color.blackText,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  innerList__subheader: {
    padding: 0,
    background: Color.activePrimaryButton,
    ...Montserrat28,
    fontWeight: 600,
    color: Color.blackText,
  },
  innerList__item: {
    ...Montserrat22,
    cursor: 'pointer',
    color: Color.innerListItems,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  innerList__items: {
    paddingTop: pxToRem(15),
    paddingLeft: pxToRem(25),
    display: 'flex',
    flexDirection: 'column',
    gap: pxToRem(15),
  },
}
export default styles
