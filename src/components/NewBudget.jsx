import { useState } from "react"
import Message from "./Message"

function NewBudget({
  budget,
  setBudget,
  setIsBudgetValid
}) {
  const [message, setMessage] = useState("")

  const handleBudget = e => {
    e.preventDefault()

    if (budget < 1) {
      setMessage("El valor debe ser mayor a 0")
      return
    }

    if (isNaN(budget)) {
      setMessage("El valor debe ser un número")
      return
    }

    setIsBudgetValid(true)
  }

  return (
    <div className="container-budget container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="input">
          <label htmlFor="goal">Definir Meta</label>
          <input
            type="text"
            className="new-budget"
            id="goal"
            value={ budget }
            onChange={ e => setBudget(e.target.value) }
          />
        </div>

        <input
          type="submit"
          value="Añadir"
        />

        { message && <Message type="error">{ message }</Message> }
      </form>
    </div>
  )
}

export default NewBudget
