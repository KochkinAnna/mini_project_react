import {GenreBadge, MovieInfo, PosterPreview, StarsRating} from "../../components";
import {useParams} from "react-router-dom";

import css from './MoviePage.module.css'

const MoviePage = () => {
    const {movieId} = useParams();
    return (
        <div className={css.MoviePage}>
            <div>
                <PosterPreview movieId={movieId}/>
                <StarsRating movieId={movieId}/>
                <GenreBadge movieId={movieId}/>
            </div>
            <div>
                <MovieInfo movieId={movieId}/>
            </div>
        </div>
    );
};

export {MoviePage};