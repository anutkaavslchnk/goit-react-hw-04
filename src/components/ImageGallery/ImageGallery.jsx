import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {items.map(item => (
        <li key={item.id} className={s.galleryItem}>
          <ImageCard
            src={item.urls.small}
            alt={item.alt_description}
            onImageClick={() => onImageClick({ url: item.urls.full, alt: item.alt_description })}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
