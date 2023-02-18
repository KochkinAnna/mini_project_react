import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer} from "./slices";

const rootReducer = combineReducers({
    genres: genresReducer,
    movies: moviesReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}