import pxToRem from 'core/functions/pxToRem'

const styles = {
  icons: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    height: pxToRem(90),
    width: pxToRem(24),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
  },
}

export default styles
