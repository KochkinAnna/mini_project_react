import {useEffect, useState} from "react";
import {moviesService} from "../../services";

import css from './MovieInfo.module.css'

const MovieInfo = ({movieId}) => {

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        moviesService.getById(movieId).then(({data}) => setMovie(data))
    }, [movieId])


    if (movie) {
        return (
            <div className={css.MovieInfo}>
                <div className={css.title}><b>{movie.title}</b></div>
                <div><b>release date:</b> {movie.release_date}</div>
                <div><b>rating:</b> {movie.vote_average}</div>
                <div><b>original language:</b> {movie.original_language}</div>
                <div><b>genre:</b> {movie.genre_ids}</div>
                <hr/>
                <div>{movie.overview}</div>
            </div>
        );
    }
};

export {MovieInfo};