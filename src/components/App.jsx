import { MoviePage } from "pages/HomePage/MoviePages/MoviePage";
import { Navigation } from "components/Navigation/Navigation";
import { HomePage } from "pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";


export const App = () => {
  
  

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<Navigation />}> 
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage/> } />
        </Route> 
      </Routes>
    
    </div>
  );
};
