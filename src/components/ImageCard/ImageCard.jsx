import css from './ImageCard.module.css';

function ImageCard({ image, setModalImage }) {
  return (
    <div
      className={css.container}
      onClick={() => setModalImage(image)}
    >
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
}

export default ImageCard;
