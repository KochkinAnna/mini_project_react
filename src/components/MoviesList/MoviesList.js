import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";

import css from './MovieList.module.css'
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, page, errors, loading} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getMovies({page: query.get('page')}))
    }, [dispatch, query])

    return (
        <div>

            {errors && JSON.stringify(errors)}
            {loading && <h3>Loading...</h3>}

            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.pagination}>
                <button disabled={page === 1}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev</button>
                <div>- {page} -</div>
                <button disabled={page === 500}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next</button>
            </div>
        </div>
    );
};

export {MoviesList};