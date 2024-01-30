import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import BreakfastIcon from '../img/breakfast.png'
import LunchIcon from '../img/lunch.png'
import DinnerIcon from '../img/dinner.png'
import SnackIcon from '../img/snack.png'
import WaterIcon from '../img/water.png'
import StepsIcon from '../img/steps.png'
import ExerciseIcon from '../img/exercise.png'

const categorieIcons = {
  breakfast: BreakfastIcon,
  lunch: LunchIcon,
  dinner: DinnerIcon,
  snack: SnackIcon,
  water: WaterIcon,
  steps: StepsIcon,
  exercise: ExerciseIcon
}

const categorieDictionary = {
  breakfast: 'Desayuno',
  lunch: 'Almuerzo',
  dinner: 'Cena',
  snack: 'Snack',
  water: 'Agua',
  steps: 'Pasos',
  exercise: 'Ejercicio'
}

function Note({ note }) {
  const { id, date, title, number, description, categorie } = note

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log('Editar')}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('Eliminar')}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={ leadingActions() }
        trailingActions={ trailingActions() }
      >
        <div className="note shadow">
          <div className="content-note">
            <img src={categorieIcons[categorie]} alt="" />
            <div className="description-note">
              <p className="categoria">{categorieDictionary[categorie]}</p>
              <p className="name-note">{title}</p>
              <p className="date-note">{date}</p>
            </div>
          </div>
          <p className="amount-note">{number} cal</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Note
