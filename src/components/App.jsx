import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

const HomePage = lazy(() => import('../pages/HomePage/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/HomePage/MoviePages/MoviePage'));
const MovieDetailPage = lazy(() => import('../pages/HomePage/MovieDetailPage/MovieDetailPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const ErrorPage = lazy(()=>import('../pages/HomePage/ErrorPage/ErrorPage'))

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
  
  )
    
};

