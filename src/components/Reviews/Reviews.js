import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const responce = await getMovieReviews(id);
        setReviews(responce.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews.length === 0 ? (
        <span>We don't have any reviews for this movie</span>
      ) : (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <strong>{author}</strong>
              <p>{content}</p>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Reviews;
