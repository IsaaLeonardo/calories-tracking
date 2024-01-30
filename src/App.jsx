import { useEffect, useState } from "react"
import Header from "./components/Header"
import NotesList from "./components/NotesList"
import Modal from "./components/Modal"
import addIcon from "./img/add.png"

function App() {
  const [budget, setBudget] = useState(0)
  const [isBudgetValid, setIsBudgetValid] = useState(false)

  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)

  const [notes, setNotes] = useState([])

  const [noteToEdit, setNoteToEdit] = useState({})

  useEffect(() => {
    if (Object.keys(noteToEdit).length == 0)
      return
    
    handleModalOpen()
  }, [noteToEdit])

  const handleModalOpen = () => {
    setModal(true)

    setTimeout(() => {
      setModalAnimation(true)
    }, 100)
  }

  const saveNote = note => {
    // Save new note
    if (Object.keys(noteToEdit).length === 0) {
      setNotes([...notes, note])
      return
    }

    // Update alredy created note
    const updatedNotes = notes.map( n => (
      n.id === noteToEdit.id ? note : n
    ))

    setNotes(updatedNotes)
  }

  const deleteNote = id => {
    const updatedNotes = notes.filter( n => n.id !== id )
    setNotes(updatedNotes)
  }

  return (
    <div className={modal ? "fix" : ""}>
      <Header
        budget={ budget }
        setBudget={ setBudget }
        isBudgetValid={ isBudgetValid }
        setIsBudgetValid={ setIsBudgetValid }
        notes={ notes }
      />

      {isBudgetValid && (
        <>
          <main>
            <NotesList
              notes={ notes }
              setNoteToEdit={ setNoteToEdit }
              deleteNote={ deleteNote }
            />
          </main>

          <div className="new-note">
            <img
              src={ addIcon }
              alt="Añadir"
              onClick={ handleModalOpen }
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={ setModal }
          modalAnimation={ modalAnimation }
          setModalAnimation={ setModalAnimation }
          saveNote={ saveNote }
          noteToEdit={ noteToEdit }
          setNoteToEdit={ setNoteToEdit }
        />
      )}
    </div>
  )
}

export default App
