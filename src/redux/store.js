import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer} from "./slices";

const rootReducer = combineReducers({
    genres: genresReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}