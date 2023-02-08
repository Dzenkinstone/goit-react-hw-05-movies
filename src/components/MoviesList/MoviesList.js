import { NavLink, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';
import { Item } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, name }) => (
        <Item key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <p>{title ?? name}</p>
          </NavLink>
        </Item>
      ))}
    </List>
  );
};
