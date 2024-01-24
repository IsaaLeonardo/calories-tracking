import closeIcon from '../img/close.png'

function Modal({ setModal, modalAnimation, setModalAnimation }) {
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
      </form>
    </div>
  )
}

export default Modal
