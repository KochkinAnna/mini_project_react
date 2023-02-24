import {Link} from "react-router-dom";

import css from './Genre.module.css'


const Genre = ({genre}) => {

    const {id, name} = genre;

    return (
        <div className={css.Genre}>
            <Link to={`/genre/${id}`}>
                <button className={css.butt}>{name}</button>
            </Link>
        </div>
    );
};

export {Genre};