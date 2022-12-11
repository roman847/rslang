import { Color, Montserrat16, Montserrat28, Montserrat46 } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'

export const styles = {
  wrapper: {
    padding: `${pxToRem(100)} ${pxToRem(135)}`,
  },
  section__header: {
    color: Color.primary,
    paddingBottom: pxToRem(35),
    ...Montserrat46,
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
    cursor: 'pointer',
  },
  card__header: {
    color: Color.secondary,
    paddingTop: pxToRem(25),
    paddingBottom: pxToRem(10),
    ...Montserrat28,
    cursor: 'pointer',
  },
  card__description: {
    ...Montserrat16,
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
