
import Modal from "react-modal";
import s from './ ImageModal.module.css'

Modal.setAppElement('#root'); 

const ImageModal = ({ isOpen, onRequestClose, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
     
      overlayClassName={s.overlay}
      closeTimeoutMS={300} 
    >
      <div className={s.content}>
        <button onClick={onRequestClose}>×</button>
        <img src={imageUrl} alt={imageAlt} className={s.image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
