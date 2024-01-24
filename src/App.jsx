import { useState } from "react"
import Header from "./components/Header"
import addIcon from "./img/add.png"

function App() {
  const [budget, setBudget] = useState(0)
  const [isBudgetValid, setIsBudgetValid] = useState(false)

  const [modal, setModal] = useState(false)

  const handleNewNote = () => {
    setModal(true)
  }

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
          <img
            src={ addIcon }
            alt="Añadir"
            onClick={ handleNewNote }
          />
        </div>
      )}

      {modal && (
        <p>modal true</p>
      )}
    </>
  )
}

export default App
