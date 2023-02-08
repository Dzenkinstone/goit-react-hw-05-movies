import { MoviesList } from 'components/MoviesList';
import { Container } from './MainPage.styled';

export const MainPage = ({ movies }) => {
  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </Container>
  );
};
