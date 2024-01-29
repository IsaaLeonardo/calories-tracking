import { useState, useEffect } from "react"

function Dashboard({ budget, notes }) {
  const [available, setAvailable] = useState(0)
  const [reached, setReached] = useState(0)

  useEffect(() => {
    const totalReached = notes.reduce((accumulator, note) => accumulator + note.number, 0)
    const totalAvailable = budget - totalReached

    setAvailable(totalAvailable)
    setReached(totalReached)
  }, [notes])

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        Chart
      </div>

      <div className="content-budget">
        <p>
          <span>Meta:</span> { budget.toLocaleString("es-VE") } cal
        </p>

        <p>
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
