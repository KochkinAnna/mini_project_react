import {useEffect, useState} from "react";

import {moviesService} from "../../services";

const PosterPreview = ({movieId}) => {

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        moviesService.getById(movieId).then(({data}) => setMovie(data))
    }, [movieId])

    return (
        <div>
            {movie &&
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                     alt={movie.original_title + '_poster'}/>
            }
        </div>
    );
};

export {PosterPreview};