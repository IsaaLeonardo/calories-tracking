function Note({ note }) {
  const { id, date, title, description, categorie } = note
  return (
    <div>
      <div className="note shadow">
        <div className="content-note">
          <div className="description-note">
            <p className="categoria">{categorie}</p>
            <p className="name-note">{title}</p>
            <p className="date-note">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
