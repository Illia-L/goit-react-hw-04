import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, setModalImage }) {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
          <ImageCard
            image={image}
            setModalImage={setModalImage}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
