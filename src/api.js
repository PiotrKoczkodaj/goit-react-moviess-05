import axios from "axios";

export const api = () => {

    try {
        let movies = axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd');
   return movies.then(resp=>{return resp.data.results})
    } catch (err) {
        console.log(err)
    }

}

