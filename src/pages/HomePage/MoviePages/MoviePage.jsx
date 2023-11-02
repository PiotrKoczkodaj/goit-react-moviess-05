import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchMovieByName } from 'utils/fetchMovieByName';

export const MoviePage = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
const [query, setQuery] = useState('');

  const handleSubmit = e => {
      e.preventDefault();
      setQuery(e.target[0].value)
    navigate(`?query=${e.target[0].value}`);

    };
    
    useEffect(() => {
       fetchMovieByName(query).then(resp => {
             setMovies([...resp.data.results]);
       }); 
        
    },[query])
         
    
  
  return (
      <>
         
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{from:`/movies?query=${query}`}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
