import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchMovieByName } from 'utils/fetchMovieByName';

export const MoviePage = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`?query=${e.target[0].value}`);

    fetchMovieByName(e.target[0].value).then(resp => {
      setMovies([...resp.data.results]);
    });
    };
    

  return (
      <>
         
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{from:'/movies'}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
