import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utils/fetchCast';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(resp => {
      setCast([...resp.data.cast]);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              width={100}
              height={100}
            />
            <p>{item.name}</p>
            <p>Character:{item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
