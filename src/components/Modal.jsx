import { useState } from 'react'
import closeIcon from '../img/close.png'

function Modal({ setModal, modalAnimation, setModalAnimation }) {
  const [newNote, setNewNote] = useState({
    title: '',
    number: '',
    categorie: ''
  })

  const hanldeCloseModal = () => {
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
          onClick={ hanldeCloseModal }
        />
      </div>

      <form className={`form ${modalAnimation ? 'animate' : 'close'}`}>
        <legend>Nueva Nota</legend>

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
