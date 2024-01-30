import { useEffect, useState } from 'react'
import Message from './Message'
import { createId, formatDate } from '../helpers/index.js'
import closeIcon from '../img/close.png'

function Modal({
  setModal,
  modalAnimation,
  setModalAnimation,
  saveNote,
  noteToEdit,
  setNoteToEdit,
}) {
  const [message, setMessage] = useState('')
  const [newNote, setNewNote] = useState({
    title: '',
    number: '',
    categorie: ''
  })

  useEffect(() => {
    if (Object.keys(noteToEdit).length === 0)
      return

    setNewNote({
      title: noteToEdit.title,
      number: noteToEdit.number,
      categorie: noteToEdit.categorie
    })
  }, [])

  const closeMessage = () => {
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  const handleSubmitNote = e => {
    e.preventDefault()

    if ([newNote.title, newNote.number, newNote.categorie].includes('')) {
      setMessage('Todos los campos son obligatorios')
      
      closeMessage()
      return
    }

    if (newNote.number <= 0) {
      setMessage('La cantidad debe ser mayor a 0')

      closeMessage()
      return
    }

    saveNote({
      id: createId(),
      date: formatDate(Date.now()),
      ...newNote
    })

    handleCloseModal()
  }

  const handleCloseModal = () => {
    setNoteToEdit({})
    setModalAnimation(false)

    setTimeout(() => {
      setModal(false)
    }, 350)
  }

  return (
    <div className="modal">
      <div className="close-modal">
        <img
          src={ closeIcon }
          alt="Cerrar"
          onClick={ handleCloseModal }
        />
      </div>

      <form
        className={`form ${modalAnimation ? 'animate' : 'close'}`}
        onSubmit={handleSubmitNote}
      >
        <legend>
          { noteToEdit.id ? 'Editar nota' : 'Nueva nota' }
        </legend>
        { message && <Message type="error">{ message }</Message> }

        <div className="input">
          <label htmlFor="title">Título</label>

          <input
            id='title'
            type='text'
            placeholder='Arroz con pollo, entrenamiento de piernas, etc.'
            value={ newNote.title }
            onChange={ e => setNewNote({...newNote, title: e.target.value}) }
          />
        </div>

        <div className="input">
          <label htmlFor="number">Cantidad ganada o perdida</label>

          <input
            id='number'
            type='number'
            placeholder='300 cal'
            value={ newNote.number }
            onChange={ e => setNewNote({...newNote, number: e.target.value}) }
          />
        </div>

        <div className="input">
          <label htmlFor="number">Categoría</label>

          <select
            id="categorie"
            value={ newNote.categorie }
            onChange={ e => setNewNote({...newNote, categorie: e.target.value}) }
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

        <input
          type="submit"
          value="Registrar nota"
        />
      </form>
    </div>
  )
}

export default Modal
