import { MoviePage } from 'pages/HomePage/MoviePages/MoviePage';
import { Navigation } from 'components/Navigation/Navigation';
import { HomePage } from 'pages/HomePage/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { MovieDetailPage } from 'pages/HomePage/MovieDetailPage/MovieDetailPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
