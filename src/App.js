import {Route, Routes} from "react-router-dom";
import {GenresPage, HomePage, MoviePage, MoviesPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:movieId'} element={<MoviePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
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