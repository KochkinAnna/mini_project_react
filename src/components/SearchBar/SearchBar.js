import {useState} from "react";
import {moviesService} from "../../services";
import css from "../MoviesList/MovieList.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const SearchBar = () => {

    const [searchKey, setSearchKey] = useState('')
    const [movies, setMovies] = useState([])


    const searchMovies = async ({preventDefault}) => {
        preventDefault();
        try {
            const {data:{results}} = await moviesService.searchMovie(searchKey)
            setMovies(results)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={searchMovies}>
                <input type={"text"}
                       placeholder={'Search movie'}
                       value={searchKey}
                       onChange={(e) => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>

            <div>
                {movies.map(movie => console.log(67987087))}
            </div>
        </div>
    );
};

export {SearchBar};