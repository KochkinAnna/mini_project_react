import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}>HOME</NavLink>
            <NavLink to={'movies'}>MOVIES</NavLink>
            <NavLink to={'genres'}>GENRES</NavLink>
        </div>
    );
};

export {Header};