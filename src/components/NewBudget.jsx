import { useState } from "react"
import Message from "./Message"

function NewBudget({ budget, setBudget }) {
  const [message, setMessage] = useState("")

  const handleBudget = e => {
    e.preventDefault()

    if (budget < 1) {
      setMessage("El presupuesto debe ser mayor a 0")
      return
    }

    if (isNaN(budget)) {
      setMessage("El presupuesto debe ser un número")
      return
    }
  }

  return (
    <div className="container-budget container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="input">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            type="text"
            className="new-budget"
            name="presupuesto"
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
