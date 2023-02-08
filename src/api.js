import axios from 'axios';

const KEY = 'd7e465e9850be233d7a3c42efee828b5';

export const getMovies = async () => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  return responce.data;
};

export const getMoviesById = async movie_id => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`
  );
  return responce.data;
};

export const getMovieCredits = async movie_id => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`
  );
  return responce.data;
};

export const getMovieReviews = async movie_id => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return responce.data;
};

export const getMovieByQuery = async query => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return responce.data;
};
