import { useState } from "react"
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

  const handleNewNote = () => {
    setModal(true)

    setTimeout(() => {
      setModalAnimation(true)
    }, 100)
  }

  const saveNote = note => {
    setNotes([...notes, note])
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
            />
          </main>

          <div className="new-note">
            <img
              src={ addIcon }
              alt="Añadir"
              onClick={ handleNewNote }
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
        />
      )}
    </div>
  )
}

export default App
