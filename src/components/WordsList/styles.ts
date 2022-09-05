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
    '&::-webkit-scrollbar': {
      width: pxToRem(7),
    },
    '&::-webkit-scrollbar-thumb': {
      background: Color.primary,
      borderRadius: pxToRem(10),
    },
  },
  list: {
    padding: 0,
  },
  listItemIcon: {
    minWidth: pxToRem(18),
    marginRight: pxToRem(8),
  },
  listItemText: {
    display: 'flex',
  },
  primaryText: {
    ...Montserrat16,
    fontWeight: 600,
  },
  secondaryText: {
    ...Montserrat16,
  },
  listSubheader_errors: {
    borderRadius: pxToRem(100),
    display: 'flex',
    lineHeight: pxToRem(25),
    justifyContent: 'center',
    background: Color.errorLight,
    marginTop: pxToRem(12),
    marginBottom: pxToRem(12),
    marginLeft: pxToRem(14),
    padding: `0 ${pxToRem(9)}`,
    maxWidth: 'max-content',
  },
  listSubheader_correct: {
    borderRadius: pxToRem(100),
    display: 'flex',
    lineHeight: pxToRem(25),
    justifyContent: 'center',
    background: Color.secondaryLight,
    marginTop: pxToRem(12),
    marginBottom: pxToRem(12),
    marginLeft: pxToRem(14),
    padding: `0 ${pxToRem(9)}`,
    maxWidth: 'max-content',
  },
  listSubheader__mainText: {
    ...Montserrat16,
    color: Color.blackText,
  },
  listSubheader__value_error: {
    ...Montserrat16,
    fontWeight: 700,
    color: Color.error,
  },
  listSubheader__value_correct: {
    ...Montserrat16,
    fontWeight: 700,
    color: Color.secondary,
  },
}
export default styles
