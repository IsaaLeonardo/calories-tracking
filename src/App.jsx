import { useEffect, useState } from "react"
import Header from "./components/Header"
import Filters from "./components/Filters"
import NotesList from "./components/NotesList"
import Modal from "./components/Modal"
import addIcon from "./img/add.png"

function App() {
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("budget")
    return savedBudget ? Number(savedBudget) : 0
  })
  const [isBudgetValid, setIsBudgetValid] = useState(false)

  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes")
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  const [filter, setFilter] = useState("")
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const [noteToEdit, setNoteToEdit] = useState({})

  useEffect(() => {
    if (Object.keys(noteToEdit).length == 0)
      return
    
    handleModalOpen()
  }, [noteToEdit])

  useEffect(() => {
    localStorage.setItem("budget", budget)
  }, [budget])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
    setFilteredNotes(notes)
  }, [notes])

  useEffect(() => {
    if (!filter) {
      setFilteredNotes(notes)
      return
    }

    const filterResult = notes.filter( n => n.categorie === filter )
    setFilteredNotes(filterResult)
  }, [filter])

  useEffect(() => {
    if (budget === 0)
      return

    setIsBudgetValid(true)
  }, [])

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
        setNotes={ setNotes }
      />

      {isBudgetValid && (
        <>
          <main>
            {notes.length ? (
              <Filters
                filter={ filter }
                setFilter={ setFilter }
              />
            ) : (
              null
            )}
            <NotesList
              notes={ notes }
              filteredNotes={ filteredNotes }
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
