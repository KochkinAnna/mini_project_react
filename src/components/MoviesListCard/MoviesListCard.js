import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './MovieListCard.module.css'

const MoviesListCard = ({movie}) => {

    const {original_title, poster_path, vote_average} = movie;

    return (
        <div className={css.MovieListCard}>
            <div>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>
            </div>
            <StarsRating vote_average={vote_average}/>
            <GenreBadge/>

            <div className={css.title}>{original_title}</div>
            <hr/>
        </div>
    );
};

export {MoviesListCard};