import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getMoviesById } from 'api';

import { MoviesInformation } from 'components/MoviesInformation';
import { BackButton } from 'components/BackButton';

const MoviesDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  useEffect(() => {
    const fetchById = async () => {
      try {
        setIsLoading(true);
        const responce = await getMoviesById(id);
        setMovies(responce);
      } catch (error) {
        toast('There is no film with that name...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchById();
  }, [id]);

  return (
    <>
      <BackButton location={location} />
      <MoviesInformation movies={movies} /> <Toaster />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
