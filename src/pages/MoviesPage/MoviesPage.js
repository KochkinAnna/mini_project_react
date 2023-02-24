import {useState} from "react";

import {moviesService} from "../../services";

import {Genres, MoviesList, MoviesListCard} from "../../components";

import css from './MoviesPage.module.css';

const MoviesPage = () => {


    const [searchKey, setSearchKey] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();
        try {
            const results = await moviesService.searchMovie(searchKey)
            const filtred = results.data.results && results.data.results.filter(v => v.title.includes(searchKey))
            setMovies(filtred)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={css.MoviesPage}>
            <div className={css.Genres}><Genres/></div>

            <div>
                <div className={css.input}>
                    <form onSubmit={searchMovies}>
                        <input type={"text"}
                               placeholder={'Search movie'}
                               value={searchKey}
                               onChange={(e) => setSearchKey(e.target.value)}/>
                        <button type={"submit"} className={css.buttoninput}>Search</button>
                    </form>
                </div>

                <div className={css.MoviesList}>
                    {movies.length === 0 &&
                        <MoviesList/>
                        || movies.length !== 0 &&
                        movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>

            </div>
        </div>
    );
};

export {MoviesPage}