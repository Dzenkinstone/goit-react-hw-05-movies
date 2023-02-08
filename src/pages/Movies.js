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

        setMovies(responce.results);
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [name]);

  return (
    <main>
      <FoundMovies onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
