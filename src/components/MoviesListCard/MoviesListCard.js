import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = () => {
    return (
        <div>
            <PosterPreview/>
            <StarsRating/>
            <MovieInfo/>
            <GenreBadge/>
        </div>
    );
};

export {MoviesListCard};