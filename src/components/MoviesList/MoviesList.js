import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MovieList.module.css'

const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, page, errors, loading} = useSelector(state => state.movies);

    const genre = useLocation().pathname.slice(7);
    console.log(genre)

    const filtredGenredFilms = movies && movies.filter(m => m.genre_ids.includes(Number(genre)))
    console.log(filtredGenredFilms)

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getMovies({page: query.get('page')}))
    }, [dispatch, query])

    return (
        <div>
            <div className={css.loading}>
                {errors && JSON.stringify(errors)}
                {loading && <h3>Loading...</h3>}
            </div>

            <div className={css.column}>
                <div className={css.Movies}>
                    {
                        genre !== '' &&
                        filtredGenredFilms.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                        || movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                    }
                </div>

                <div className={css.pagination}>
                    <button disabled={page === 1}
                            onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                    </button>
                    <div>- {page} -</div>
                    <button disabled={page === 500}
                            onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                    </button>
                </div>
            </div>
        </div>
    );
};

export {MoviesList};