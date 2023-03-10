import {Link, Outlet} from "react-router-dom";

import {Header, ToggleDarkMode, UserInfo} from "../../components";

import css from './MainLayout.module.css';

const MainLayout = () => {

    return (

        <div>

            <div className={css.MainLayout}>

                <div className={css.top}>
                    <div className={css.webtitle}>
                        <div>
                            <img src={'https://i.pinimg.com/564x/d4/a1/17/d4a117312abaa77cf02f5616424d9512.jpg'}
                                 alt={'bird_logo'}/>
                        </div>
                        <div className={css.owufilm}>
                            <Link to={''}><b>OWU FILMS</b></Link>
                        </div>
                    </div>

                    <div className={css.toggle}>
                        <ToggleDarkMode/>
                    </div>

                    <div className={css.usertitle}>
                        <div className={css.userlogo}>
                            <img src={'https://i.pinimg.com/564x/e5/30/92/e53092d84abcf2b22f633ce67f285d46.jpg'}
                                 alt={'user_logo'}/>
                        </div>
                        <div>
                            <UserInfo/>
                        </div>
                    </div>
                </div>

                <div>
                    <Header/>
                    <Outlet/>
                </div>

            </div>
        </div>
    );
};

export {MainLayout};