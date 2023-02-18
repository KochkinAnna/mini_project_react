import {apiService} from "./apiService";
import {urls} from "../configs";

const moviesService = {
    getAll:(page)=>apiService.get(`${urls.movies}${page}`)
}

export {
    moviesService
}