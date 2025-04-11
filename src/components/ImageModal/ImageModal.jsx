import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

function ImageModal({ modalImage, setModalImage }) {
  // if (!modalImage) return null;

  return (
    <ReactModal
      isOpen={!!modalImage}
      onRequestClose={() => setModalImage(null)}
      overlayClassName={css.overlay}
      className={css.content}
    >
      <div className={css.container}>
        <img
          className={css.image}
          src={modalImage?.urls?.regular}
          alt={modalImage?.description}
        />

        <div className={css.data}>
          {!!modalImage?.user?.name && <p className={css.author}>Author: {modalImage?.user?.name}. </p>}
          {!!modalImage?.description && <p className={css.description}>{modalImage?.description}</p>}
          {!!modalImage?.likes && <p className={css.likes}>{modalImage?.likes} people liked this photo</p>}
        </div>
      </div>
    </ReactModal>
  );
}

export default ImageModal;
