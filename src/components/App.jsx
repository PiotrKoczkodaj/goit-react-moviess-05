
import { Navigation } from "pages/Navigation/Navigation";
// import { HomePage } from "pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";


export const App = () => {
  // const state = {
  //   trendingFilms: []
  // }

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
        </Route> 
      </Routes>
    
    </div>
  );
};