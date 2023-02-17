import {Route, Routes} from "react-router-dom";
import {GenresPage, HomePage, MoviesPage, NotFoundPage, SearchedPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'search'} element={<SearchedPage/>}/>
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