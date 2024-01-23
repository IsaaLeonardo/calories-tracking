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
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input
            type="text"
            className="nuevo-presupuesto"
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
