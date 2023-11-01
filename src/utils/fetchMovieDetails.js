import axios from "axios"

export const fetchMovieDetails = () => {
   let movieId= 945729
    try {
        let movieDetails = axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd`);
        return movieDetails
    } catch (error) {
        console.log(error)
    }
} 