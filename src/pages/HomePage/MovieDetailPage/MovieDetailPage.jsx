import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'utils/fetchMovieDetails';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import styles from './MovieDetailPage.module.css'

 const MovieDetailPage = () => {
  const { movieId} = useParams();
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
     
  },[details,movieId]);

  return (
    <>
      <button className={styles.button} onClick={handleClick}>&#60;-- Go back</button>
      <div className={styles.mainInfoContainer}>
        <img
          alt={`${details.title} poster`}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          width={300}
          height={450}
        />
        <div className={styles.mainInfo}>
          <h4>{details.title}</h4>
          <p>User score: {details.vote_average}</p>
          <h5>Overview</h5>
          <p>{details.overview}</p>
          <h6>Genres</h6>
         
        </div>
      </div>

      <div className={styles.additionalInfoContainer}>
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

export default MovieDetailPage;