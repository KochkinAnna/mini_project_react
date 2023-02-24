import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}>MOVIES</NavLink>
        </div>
    );
};

export {Header};