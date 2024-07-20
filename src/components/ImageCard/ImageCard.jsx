import s from './ImageCard.module.css';

const ImageCard = ({ src, alt, onImageClick }) => {
  return (
    <img
      className={s.image}
      src={src}
      alt={alt}
      onClick={onImageClick}
    />
  );
};

export default ImageCard;
