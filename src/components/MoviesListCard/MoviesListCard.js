import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './MovieListCard.module.css'
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {

    const {id, original_title, poster_path, vote_average} = movie;

    return (
        <Link to={`${id}`}>
        <div className={css.MovieListCard}>
            <div>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>
            </div>

            <div className={css.stars_badge}>
            <StarsRating vote_average={vote_average}/>
            <GenreBadge/>
            </div>

            <div className={css.title}>{original_title}</div>
        </div>
            </Link>
    );
};

export {MoviesListCard};