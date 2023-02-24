import css from './Genre.module.css'
import {Link} from "react-router-dom";

const Genre = ({genre}) => {

    const {id,name} = genre;

    return (
        <div className={css.Genre}>
            <Link to={`/genre/${id}`}>
            <button className={css.butt}>{name}</button>
            </Link>
        </div>
    );
};

export {Genre};