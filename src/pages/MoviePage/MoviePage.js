import {MovieInfo, PosterPreview, Videos} from "../../components";
import {useParams} from "react-router-dom";

import css from './MoviePage.module.css'

const MoviePage = () => {
    const {movieId} = useParams();
    return (
        <div className={css.MoviePage}>
            <div className={css.info}>
                <div>
                    <PosterPreview movieId={movieId}/>
                </div>
                <div className={css.MovieInfo}>
                    <MovieInfo movieId={movieId}/>
                </div>
            </div>
                <Videos movieId={movieId}/>
        </div>
    );
};

export {MoviePage};