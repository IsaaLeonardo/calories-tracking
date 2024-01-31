function Filters({ filter, setFilter }) {
  return (
    <div className="filters shadow container">
      <form>
        <div className="input">
            <label>Filtrar Notas</label>
            <select
              onChange={ e => setFilter(e.target.value) }
            >
              <option value="">--Seleccione una opción--</option>
              <option value="exercise">💪 Ejercicio</option>
              <option value="steps">👣 Pasos</option>
              <option value="water">🚰 Agua</option>
              <option value="breakfast">🍳 Desayuno</option>
              <option value="lunch">🥩 Almuerzo</option>
              <option value="dinner">🥞 Cena</option>
              <option value="snack">🥯 Snack</option>
            </select>
          </div>
      </form>
    </div>
  )
}

export default Filters
