import {Route, Routes} from "react-router-dom";
import {MoviePage, MoviesPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'movies/:movieId'} element={<MoviePage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export
{
    App
};