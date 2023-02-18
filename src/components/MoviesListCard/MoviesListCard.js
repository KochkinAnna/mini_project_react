import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movie}) => {

    const {original_title, poster_path} = movie;

    return (
        <div>
            <div>
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title}/>
            </div>

            <PosterPreview/>
            <StarsRating/>
            <GenreBadge/>

            <div>{original_title}</div>
            <hr/>
        </div>
    );
};

export {MoviesListCard};