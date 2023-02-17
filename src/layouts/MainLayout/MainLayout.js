import {Header, UserInfo} from "../../components";
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div className={css.MainLayout}>
            <div>
                <UserInfo/>
            </div>

            <div>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};