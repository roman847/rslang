import pxToRem from 'core/functions/pxToRem'
import { Color } from 'core/variables/constants'

const styles = {
  container: {
    width: pxToRem(770),
    height: pxToRem(530),
    border: `2px solid ${Color.primary}`,
    borderRadius: pxToRem(100),
    background: 'none',
    margin: '0 auto',
  },
}
export default styles
