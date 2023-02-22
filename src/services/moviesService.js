import {apiService} from "./apiService";
import {urls} from "../configs";

const moviesService = {
    getAll:(page=1)=>apiService.get(urls.movies, {params:{page}}),
    getById:(id)=>apiService.get(`/movie/${id}`),
    getVideoById:(id)=>apiService.get(`/movie/${id}}/videos`)
}

export {
    moviesService
}