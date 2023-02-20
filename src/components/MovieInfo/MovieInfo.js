import {useEffect, useState} from "react";
import {moviesService} from "../../services";

const MovieInfo = ({movieId}) => {

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        moviesService.getById(movieId).then(({data}) => setMovie(data))
    }, [movieId])

    if (movie) {
        return (
            <div>
                <div>{movie.title}</div>
                <div>release date: {movie.release_date}</div>
                <div>vote average: {movie.vote_average}</div>
                <div>original language: {movie.original_language}</div>
                <div>genre: {movie.genre_ids}</div>
                <hr/>
                <div>{movie.overview}</div>
            </div>
        );
    }
};

export {MovieInfo};