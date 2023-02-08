import { useLocation } from 'react-router-dom';
import { Link, List } from './MoviesList.styled';
import { Item } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, name }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title ?? name}</p>
          </Link>
        </Item>
      ))}
    </List>
  );
};
