import Note from './Note'

function NotesList({ notes, setNoteToEdit }) {
  return (
    <div className="notes-list container">
      <h2>{notes.length ? 'Notas' : 'No se han registrado notas'}</h2>

      {notes.map( note => (
        <Note
          key={ note.id }
          note={ note }
          setNoteToEdit={ setNoteToEdit }
        />
      ))}
    </div>
  )
}

export default NotesList
