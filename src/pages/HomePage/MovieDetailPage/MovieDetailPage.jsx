import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'utils/fetchMovieDetails';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

export const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`${location.state.from}`);
  };

  useEffect(() => {
    fetchMovieDetails(movieId).then(resp => {
      setDetails({ ...resp.data });
      return details;
    });
  }, [details, movieId]);

  return (
    <>
      <button onClick={handleClick}>Go back</button>
      <div>
        <img
          alt={`${details.title} poster`}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          width={200}
          height={400}
        />
        <ul>
          <h4>{details.title}</h4>
          <p>User score: {details.vote_average}</p>
          <h5>Overview</h5>
          <p>{details.overview}</p>
          <h6>Genres</h6>
          <p>nie wiem nie</p>
        </ul>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <Link to="cast">
            <li>Cast</li>
          </Link>
          <Link to="reviews">
            <li>Reviews</li>
          </Link>
          <Outlet />
        </ul>
      </div>
      <div></div>
    </>
  );
};
