import  { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchGallery } from "./services/api";
import Loader from "./components/ Loader/ Loader";
import { ErrorMessage } from "formik";
import LoadMoreBtn from "./components/ LoadMoreBtn / LoadMoreBtn";
import ImageModal from "./components/ ImageModal/ ImageModal";

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
const [isLoading, setIsLoading]=useState(false);
const [error, setError]=useState(false);
const [page, setPage]=useState(0);
const [total, setTotal]=useState(0);
const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ url: '', alt: '' });
  const onSubmit = (query) => {
    setQuery(query);
    setHits([]);
    setPage(0);
  };

  useEffect(() => {
    const getData = async () => {
      if (query) {
        try {
          setError(false);
          setIsLoading(true);
          const response = await fetchGallery(query, page);
          setHits(prev=>[...prev, ...response]);
          setTotal(response.total_photos);
        } catch (error) {
          setError(true);
        }finally{
        
          setIsLoading(false);
        }
      }
    };
    getData();
  }, [query,page]);

const pages=()=>{
  setPage(prev=>prev+1);
}
const openModal = (image) => {
  setModalImage(image);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setModalImage({ url: '', alt: '' });
};

  return (
    <>

      <SearchBar onSubmit={onSubmit} />
      <ImageGallery items={hits} onImageClick={openModal} />
{isLoading&&<Loader></Loader>}

{error&&<ErrorMessage></ErrorMessage>}
{total>page &&<LoadMoreBtn pages={pages}></LoadMoreBtn>}
<ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={modalImage.url}
        imageAlt={modalImage.alt}

      />
    </>
  );
};

export default App;
