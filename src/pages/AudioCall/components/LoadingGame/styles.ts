import pxToRem from 'core/functions/pxToRem'
import { Color, Montserrat28, Montserrat46 } from 'core/variables/constants'

const styles = {
  title: {
    paddingLeft: pxToRem(5),
    ...Montserrat46,
    fontWeight: 700,
    color: Color.secondary,
  },
  header: {
    display: 'flex',
  },
  container: {
    border: `1px solid ${Color.primary}`,
    borderRadius: pxToRem(100),
    maxWidth: pxToRem(370),
    margin: `${pxToRem(153)} auto ${pxToRem(45)}`,
    height: pxToRem(40),
    position: 'relative',
  },
  loadingTrack: {
    position: 'relative',
    maxWidth: '72%',
  },
  loadingIndicator: {
    background: Color.primary,
    borderRadius: pxToRem(100),
    minHeight: pxToRem(40),
    width: pxToRem(102),
    position: 'absolute',
  },
  subtitle: {
    ...Montserrat28,
    color: Color.secondary,
    fontWeight: 600,
    textAlign: 'center',
  },
}
export default styles
