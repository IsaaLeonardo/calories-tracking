import closeIcon from '../img/close.png'

function Modal({ setModal }) {
  const hanldeCloseModal = () => {
    setModal(false)
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
    </div>
  )
}

export default Modal
