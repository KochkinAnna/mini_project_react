import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const dispatch = useDispatch();

    const {genres,errors,loading} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch])

    return (
        <div>
            {errors&& JSON.stringify(errors)}
            {loading&& <h3>Loading...</h3>}
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};