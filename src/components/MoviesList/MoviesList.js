import { NavLink, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';
import { Item } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <List>
      {movies.map(({ id, title, name }) => (
        <Item key={id}>
          <NavLink to={`/movies/${id}`}>
            <p>{title ?? name}</p>
          </NavLink>
        </Item>
      ))}
    </List>
  );
};
