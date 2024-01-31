import Note from './Note'

function NotesList({ notes, filteredNotes, setNoteToEdit, deleteNote }) {
  return (
    <div className="notes-list container">
      <h2>
        {filteredNotes.length
          ? 'Notas'
          : notes.length
            ? 'No hay notas en esta categoría'
            : 'No se han registrado notas'
        }
      </h2>

      {filteredNotes.map( note => (
        <Note
          key={ note.id }
          note={ note }
          setNoteToEdit={ setNoteToEdit }
          deleteNote={ deleteNote }
        />
      ))}
    </div>
  )
}

export default NotesList
