import axios from "axios"

export const fetchMovieByName = (movieName) => {
        try{
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd&query=${movieName}`)
        } catch (err) {
            console.log(err)
    }
}