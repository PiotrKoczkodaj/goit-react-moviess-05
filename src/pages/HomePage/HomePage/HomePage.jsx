import { api } from 'utils/api';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    api().then(resp => {
      setMovies(resp.data.results);
    });
  }, []);

  return (
    <div >
      <h2>Trending today</h2>
          <ul className={styles.list}>
              {movies.map(movie => (
                  <li  key={movie.id}><Link  to={`movies/${movie.id}`} state={{from:'/'}}>{movie.title|| movie.name}</Link></li>
              ))}
      </ul>
    </div>
  );
};

export default HomePage;