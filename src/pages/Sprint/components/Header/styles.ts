import pxToRem from 'core/functions/pxToRem'

const styles = {
  header: {
    display: 'flex',
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    height: pxToRem(90),
    width: pxToRem(24),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  menuIcon: {
    marginRight: pxToRem(27),
  },
}

export default styles
