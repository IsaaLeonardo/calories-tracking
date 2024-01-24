function Dashboard({ budget }) {
  return (
    <div className="container-budget container shadow two-columns">
      <div>
        Chart
      </div>

      <div className="content-budget">
        <p>
          <span>Meta:</span> { budget.toLocaleString("es-VE") } cal
        </p>
      </div>
    </div>
  )
}

export default Dashboard
