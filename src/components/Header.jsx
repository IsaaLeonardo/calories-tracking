import NewBudget from "./NewBudget"

function Header({ budget, setBudget }) {
  return (
    <header>
      <h1>Planificador de Calorías</h1>

      <NewBudget
        budget={ budget }
        setBudget={ setBudget }
      />
    </header>
  )
}

export default Header
