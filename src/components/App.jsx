import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { ErrorPage } from 'pages/HomePage/ErrorPage/ErrorPage';

const MoviePage = lazy(() => import("../pages/HomePage/MoviePages/MoviePage"))
 const HomePage = lazy(() => import("../pages/HomePage/HomePage/HomePage"));
 const MovieDetailPage = lazy(() => import("../pages/HomePage/MovieDetailPage/MovieDetailPage"));
 const Cast = lazy(() => import("./Cast/Cast"))
 const Reviews = lazy(()=>import("./Reviews/Reviews"))


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
        <Route path="*" element={<ErrorPage/> } /> 
      </Routes>
    </div>
  );
};
