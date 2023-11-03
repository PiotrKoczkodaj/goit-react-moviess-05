import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/fetchReviews';

 const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(resp => {
      setReview([...resp.data.results]);
    });
  }, [movieId]);

  console.log(review);

  return (
    <>
      {review.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        review.map(item => (
          <li key={item.id}>
            <p>{item.author_details.username}:</p>
            <p>{item.content}</p>
          </li>
        ))
      )}
    </>
  );
};

export default Reviews;
