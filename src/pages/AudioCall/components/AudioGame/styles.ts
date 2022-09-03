import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat46 } from 'core/variables/constants'

const styles = {
  title: {
    paddingLeft: pxToRem(5),
    ...Montserrat46,
    fontWeight: 700,
    color: Color.secondary,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}

export default styles
