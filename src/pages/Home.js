import { useEffect, useState } from 'react';
import { getMovies } from 'api';
import { MainPage } from 'components/MainPage';

const Home = () => {
  const [movies, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responce = await getMovies();
        const updatedResponce = responce.results;
        setImages(updatedResponce);
      } catch (error) {
        console.error('Error');
      }
    };
    fetchImages();
  }, []);

  return <MainPage movies={movies} />;
};

export default Home;
