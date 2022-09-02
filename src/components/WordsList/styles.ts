import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat16 } from 'core/variables/constants'

const styles = {
  wrapper: {
    height: pxToRem(300),
    alignSelf: 'start',
    border: `1px solid ${Color.lightGray}`,
    width: '100%',
    marginTop: pxToRem(27),
    overflowY: 'scroll',
    marginBottom: pxToRem(28),
  },
  listItemIcon: {
    minWidth: pxToRem(18),
    marginRight: pxToRem(8),
  },
  listItemText: {
    display: 'flex',
    width: '200px',
  },
  primaryText: {
    ...Montserrat16,
    fontWeight: 600,
  },
  secondaryText: {
    ...Montserrat16,
  },
  errorsList: {},
  listSubheader: {
    background: 'none',
    display: 'flex',
    lineHeight: pxToRem(25),
  },
  listSubheader__mainText: {
    ...Montserrat16,
    color: Color.blackText,
  },
  listSubheader__value: {
    ...Montserrat16,
    fontWeight: 700,
  },
}
export default styles
