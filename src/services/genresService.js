import {apiService} from "./apiService";
import {urls} from "../configs";

const genresService = {
    getAll:()=>apiService.get(urls.genres)
}

export {
    genresService
}