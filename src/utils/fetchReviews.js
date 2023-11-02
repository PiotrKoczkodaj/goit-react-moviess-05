import axios from "axios"

export const
    fetchReviews = (movieId) => {
        try {
        return axios.get(`
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd`)
        } catch (error) {
            console.log(error)
    }
}