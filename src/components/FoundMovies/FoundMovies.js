import { useState } from 'react';
import { Form } from './FoundMovies.styled';

export const FoundMovies = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <Form onSubmit={event => onSubmit(event, value, setValue)}>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
      <button type="submit">Search</button>
    </Form>
  );
};
