import NewBudget from "./NewBudget"

function Header({
  budget,
  setBudget,
  isBudgetValid,
  setIsBudgetValid
}) {
  return (
    <header>
      <h1>Planificador de Calorías</h1>

      { isBudgetValid ? (
        <div className="container-budget container shadow">
          <p>Meta: ${ budget }</p>
        </div>
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
