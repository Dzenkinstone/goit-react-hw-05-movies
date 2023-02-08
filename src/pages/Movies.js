import { getMovieByQuery } from 'api';
import { FoundMovies } from 'components/FoundMovies';
import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const name = searchParams.get('value');

  console.log(searchParams);

  const handleSubmit = (event, value, setValue) => {
    event.preventDefault();
    setQuery(value);
    const nextParams = value !== '' ? { value } : {};
    setSearchParams(nextParams);
    setValue('');
  };

  useEffect(() => {
    const fetchMovie = async () => {
      if (query === '') {
        return;
      }

      try {
        const responce = await getMovieByQuery(name);
        console.log(responce);
        setMovies(responce.results);
        console.log(responce);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [query, name]);

  return (
    <main>
      <FoundMovies onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
