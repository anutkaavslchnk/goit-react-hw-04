import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchGallery } from "./services/api";
import Loader from "./components/ Loader/ Loader";
import { ErrorMessage } from "formik";
import LoadMoreBtn from "./components/ LoadMoreBtn / LoadMoreBtn";

const App = () => {

  const [hits, setHits]=useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [showLoadMore, setShowLoadMore] = useState(false);
const [page, setPage]=useState(0);
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
          setHits(prev => [...prev, ...response.hits]);
          setShowLoadMore(response.total_pages && response.total_pages !== page);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      
    };
    getData();
  }, [query,page]);

const pages=()=>{
  setPage(prev=>prev+1);
}
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery items={hits} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {showLoadMore && <LoadMoreBtn pages={pages}/>}
    </>
  );
};

export default App;
