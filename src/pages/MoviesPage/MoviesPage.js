import {Genres, MoviesList} from "../../components";

import css from'./MoviesPage.module.css';

const MoviesPage = () => {
    return (
        <div className={css.MoviesPage}>
            <div className={css.Genres}><Genres/></div>
            <div className={css.MoviesList}><MoviesList/></div>
        </div>
    );
};

export {MoviesPage};