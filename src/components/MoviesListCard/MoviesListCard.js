import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './MovieListCard.module.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux";

const MoviesListCard = ({movie}) => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch])

    const {id, original_title, poster_path, vote_average, genre_ids} = movie;

    return (
        <Link to={`${id}`}>
            <div className={css.MovieListCard}>

                <div className={css.container}>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>
                    <div className={css.topright}>
                        {genre_ids.map(id =>
                            <div key={id}>
                                {genres.map(genre => id === genre.id && <GenreBadge key={genre.id} genre={genre}/>)}
                            </div>)}
                    </div>
                </div>

                <div>
                    <StarsRating vote_average={vote_average}/>
                </div>


                <div className={css.title}>{original_title}</div>
            </div>
        </Link>
    );
};

export {MoviesListCard};