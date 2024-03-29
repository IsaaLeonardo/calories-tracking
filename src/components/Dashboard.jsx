import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

function Dashboard({ budget, setBudget, setIsBudgetValid, notes, setNotes }) {
  const [available, setAvailable] = useState(0)
  const [reached, setReached] = useState(0)

  useEffect(() => {
    const totalReached = notes.reduce((accumulator, note) => accumulator + Number(note.number), 0)
    const totalAvailable = budget - totalReached

    setAvailable(totalAvailable)
    setReached(totalReached)
  }, [notes])

  const handleResetApp = () => {
    const response = confirm('¿Estás seguro de que quieres resetear la app?')

    if (!response)
      return

    setBudget(0)
    setIsBudgetValid(false)
    setNotes([])
  }

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={ buildStyles({
            pathColor: available < 0 ? "#DC2626" : "#3B82F6",
            trailColor: '#F5F5F5',
            textColor: available < 0 ? "#DC2626" : "#3B82F6",
          })}
          value={ (reached * 100) / budget }
          text={ `${((reached * 100) / budget).toFixed(2)}% alcanzado` }
        />
      </div>

      <div className="content-budget">
        <button
          className="reset-app"
          type="button"
          onClick={ handleResetApp }
        >
          Resetear App
        </button>
        <p>
          <span>Meta:</span> { budget.toLocaleString("es-VE") } cal
        </p>

        <p className={available < 0 ? "negativo" : ""}>
          <span>Disponible:</span> { Number(available).toLocaleString("es-VE") } cal
        </p>

        <p>
          <span>Alcanzado:</span> { Number(reached).toLocaleString("es-VE") } cal
        </p>
      </div>
    </div>
  )
}

export default Dashboard
