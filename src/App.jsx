import { useState } from "react"
import Header from "./components/Header"
import addIcon from "./img/add.png"

function App() {
  const [budget, setBudget] = useState(0)
  const [isBudgetValid, setIsBudgetValid] = useState(false)

  return (
    <>
      <Header
        budget={ budget }
        setBudget={ setBudget }
        isBudgetValid={ isBudgetValid }
        setIsBudgetValid={ setIsBudgetValid }
      />

      {isBudgetValid && (
        <div className="new-note">
          <img src={ addIcon } alt="Añadir" />
        </div>
      )}
    </>
  )
}

export default App
