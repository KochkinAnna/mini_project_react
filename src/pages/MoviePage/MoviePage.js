import {GenreBadge, MovieInfo, PosterPreview, StarsRating} from "../../components";

const MoviePage = () => {
    return (
        <div>
            <PosterPreview/>
            <StarsRating/>
            <MovieInfo/>
            <GenreBadge/>
        </div>
    );
};

export {MoviePage};