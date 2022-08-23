import { Color } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

export const styles = {
  wrapper: {
    padding: `${pxToRem(100)} ${pxToRem(135)}`,
  },
  section__header: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontWeight: 500,
    fontSize: pxToRem(46),
    lineHeight: pxToRem(70),
    color: Color.primary,
    paddingBottom: pxToRem(35),
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: pxToRem(270),
    height: pxToRem(477),
  },
  card__img: {
    width: pxToRem(270),
    height: pxToRem(208),
  },
  card__header: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontWeight: 500,
    fontSize: pxToRem(28),
    lineHeight: pxToRem(34),
    color: Color.secondary,
    paddingTop: pxToRem(25),
    paddingBottom: pxToRem(10),
  },
  card__description: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(25),
  },
  firstImg: {
    backgroundImage: "url('images/opportunities-book.png')",
  },
  secondImg: {
    backgroundImage: "url('images/opportunities-vocabulary.png')",
  },
  thirdImg: {
    backgroundImage: "url('images/opportunities-statistic.png')",
  },
  fourthImg: {
    backgroundImage: "url('images/opportunities-games.png')",
  },
}
