import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";

import {MoviePage, MoviesPage, NotFoundPage} from "./pages";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'movie/:movieId'} element={<MoviePage/>}/>
                    <Route path={'genre/:genreId'} element={<MoviesPage/>}/>
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