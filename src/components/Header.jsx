import Dashboard from "./Dashboard"
import NewBudget from "./NewBudget"

function Header({
  budget,
  setBudget,
  isBudgetValid,
  setIsBudgetValid,
  notes,
  setNotes,
}) {
  return (
    <header>
      <h1>Planificador de Calorías</h1>

      { isBudgetValid ? (
        <Dashboard
          budget={ budget }
          setBudget={ setBudget }
          setIsBudgetValid={ setIsBudgetValid }
          notes={ notes }
          setNotes={ setNotes }
        />
      ) : (
        <NewBudget
          budget={ budget }
          setBudget={ setBudget }
          setIsBudgetValid={ setIsBudgetValid }
        />
      )}
    </header>
  )
}

export default Header
