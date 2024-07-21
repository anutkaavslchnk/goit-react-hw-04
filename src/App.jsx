import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchGallery } from "./services/api";


import ErrorMessage from "./components/ ErrorMessage/ ErrorMessage";
import Loader from "./components/ Loader/ Loader";
import LoadMoreBtn from './components/ LoadMoreBtn / LoadMoreBtn'
import ImageModal from "./components/ ImageModal/ ImageModal"


const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [page, setPage] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ url: "", alt: "" });

  const onSubmit = (query) => {
    setQuery(query);
    setHits([]);
    setPage(1);
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setError(false);
        setIsLoading(true);
        const response = await fetchGallery(query, page);
        setHits((prev) => [...prev, ...response.results]);
        setShowLoadMore(response.total_pages && response.total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const pages = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = ({ url, alt }) => {
    setSelectedImage({ url, alt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
   
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery items={hits} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {showLoadMore && <LoadMoreBtn pages={pages}></LoadMoreBtn>}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage.url}
        imageAlt={selectedImage.alt}
      />
    </>
  );
};

export default App;
