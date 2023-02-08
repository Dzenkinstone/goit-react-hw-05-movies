import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'api';
import { useParams } from 'react-router-dom';
import { Container, Item, Wrapper } from './Cast.styled';
import { Image } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const responce = await getMovieCredits(id);
        setCredits(responce.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCredits();
  }, [id]);

  return (
    <Container>
      {credits.length === 0 ? (
        <span>There is no cast in this movie...</span>
      ) : (
        credits.map(({ profile_path, character, name }) => (
          <Item key={nanoid()}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png'
              }
              alt=""
            />
            <Wrapper>
              <span>{name}</span>
              <p>Character: {character}</p>
            </Wrapper>
          </Item>
        ))
      )}
    </Container>
  );
};

export default Cast;
