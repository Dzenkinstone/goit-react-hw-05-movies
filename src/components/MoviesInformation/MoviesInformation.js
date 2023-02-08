import { Container } from './MoviesInformation.styled';
import { List } from './MoviesInformation.styled';
import { Item } from './MoviesInformation.styled';
import { Wrapper } from './MoviesInformation.styled';
import { InformationCollector } from './MoviesInformation.styled';
import { Refs } from './MoviesInformation.styled';
import { NavLink } from 'react-router-dom';

export const MoviesInformation = ({ movies }) => {
  const {
    id,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movies;

  return (
    <>
      <Container>
        <img
          width="300px"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        />
        <List>
          <Item>
            <h1>{`${title} (${release_date?.substr(0, 4)})`}</h1>
            <p>User Score: {`${(vote_average * 10).toFixed(0)}%`}</p>
          </Item>
          <Item>
            <strong>Overview</strong>
            <p>{overview}</p>
          </Item>
          <Item>
            <strong>Genres</strong>
            <Wrapper>
              {genres?.map(({ name }) => (
                <p key={name}>{name}</p>
              ))}
            </Wrapper>
          </Item>
        </List>
      </Container>

      <InformationCollector>
        <h2>Additional Information</h2>

        <Refs>
          <li>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
          </li>
        </Refs>
      </InformationCollector>
    </>
  );
};
