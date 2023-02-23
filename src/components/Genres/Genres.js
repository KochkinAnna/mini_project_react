import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux";
import {Genre} from "../Genre/Genre";

import css from './Genres.module.css'

const Genres = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch])


    return (
        <div>
            <div className={css.Genres}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>

        </div>
    );
};

export {Genres};