import toast, { Toaster } from 'react-hot-toast';
import { getMovieByQuery } from 'api';
import { FoundMovies } from 'components/FoundMovies';
import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const name = searchParams.get('value');

  const handleSubmit = (event, value, setValue) => {
    event.preventDefault();
    const nextParams = value !== '' ? { value } : {};
    setSearchParams(nextParams);
    setValue('');
  };

  useEffect(() => {
    const fetchMovie = async () => {
      if (!name) {
        return;
      }

      try {
        const responce = await getMovieByQuery(name);

        if (responce.total_results === 0) {
          toast('Sorry, there is no films with that name', {
            duration: 2000,
            style: { color: 'red' },
          });
        }
        setMovies(responce.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [name]);

  return (
    <main>
      <FoundMovies onSubmit={handleSubmit} />
      <Toaster />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
