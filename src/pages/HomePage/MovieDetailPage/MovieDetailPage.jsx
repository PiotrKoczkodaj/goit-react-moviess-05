import { useEffect, useState } from "react"
import { fetchMovieDetails } from "utils/fetchMovieDetails"

export const MovieDetailPage = () => {

    const [details, setDetails] = useState({});
     
    useEffect(() => {
        fetchMovieDetails().then(resp => {
            setDetails({ ...resp.data });
            return details
           
        });  
        
}, []);
console.log(details)
    return (
        <>
      <div >
        <img alt={`${movieInfo.title} poster`}
          src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
          width={200}
          height={400}
        />
        <ul>
          <h4>{movieInfo.title}</h4>
          <p>User score: {movieInfo.vote_average}</p>
          <h5>Overview</h5>
          <p>{movieInfo.overview}</p>
          <h6>Genres</h6>
          <p>nie wiem nie</p>
        </ul>
          </div>
          
      <div className={styles.additionalInformation}>
        <p>Additional information</p>
              <ul>
                  <Link to="cast"><li>Cast</li></Link>
                  <Link to="reviews"><li>Reviews</li></Link> 
              </ul>
      </div>
      
      <div>
        
       <Outlet/>
        
      </div>
    </>
    )
}