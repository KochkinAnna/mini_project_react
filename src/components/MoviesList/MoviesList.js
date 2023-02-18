import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";

const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies,errors,loading} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getMovies())
    }, [dispatch])

    return (
        <div>
            {errors&& JSON.stringify(errors)}
            {loading&& <h3>Loading...</h3>}
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};