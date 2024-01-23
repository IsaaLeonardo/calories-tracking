function NewBudget({ budget, setBudget }) {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
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
      </form>
    </div>
  )
}

export default NewBudget
