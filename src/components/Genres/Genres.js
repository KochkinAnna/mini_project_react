import {useEffect} from "react";
import {genresService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        genresService.getAll().then(({data}) => dispatch(genresActions.getGenres(data)))
    }, [dispatch])

    console.log(genres);

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};