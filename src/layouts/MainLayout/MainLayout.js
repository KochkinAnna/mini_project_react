import {Header, UserInfo} from "../../components";
import {Outlet} from "react-router-dom";



const MainLayout = () => {
    return (
        <div>
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