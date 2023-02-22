import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {SearchBar} from "../SearchBar/SearchBar";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}>MOVIES</NavLink>

            <div>
                <SearchBar/>
            </div>

        </div>
    );
};

export {Header};