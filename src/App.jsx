import { useEffect, useRef, useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import * as api from './components/images-api';
import { BarLoader } from 'react-spinners';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import ReactModal from 'react-modal';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

ReactModal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const pagesCountRef = useRef(0);

  useEffect(() => {
    if (!search) return;

    addNextImages();
  }, [search, page]);

  async function addNextImages() {
    try {
      setIsLoading(true);
      setIsError(false);

      const response = await api.getImages(search, page);

      pagesCountRef.current = response.total_pages;
      setImages(imgs => [...imgs, ...response.results]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(search) {
    pagesCountRef.current = 0;
    setImages([]);
    setSearch(search);
    setPage(1);
  }

  function onLoadMore() {
    setPage(p => p + 1);
  }

  const shouldShowLoadMoreBtn =
    images.length > 0 && page < pagesCountRef.current;

  return (
    <>
      <div>
        <Toaster toastOptions={{error: {iconTheme: {primary: '#FFC107'}}}} position='top-right' />
      </div>

      <SearchBar onSubmit={onSubmit} />

      {isError ? (
        <ErrorMessage/>
      ) : (
        <>
          <ImageGallery
            images={images}
            setModalImage={setModalImage}
          />

          {shouldShowLoadMoreBtn && <LoadMoreBtn onLoadMore={onLoadMore} />}
        </>
      )}

      <Loader isLoading={isLoading}/>

      <ImageModal
        modalImage={modalImage}
        setModalImage={setModalImage}
      />
    </>
  );
}

export default App;
